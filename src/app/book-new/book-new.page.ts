import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.page.html',
  styleUrls: ['./book-new.page.scss'],
})
export class BookNewPage implements OnInit {
  pageTitle = 'New Book';
  errorMessage: string;
  bookForm: FormGroup;

  bookId: number;
  book: Book;

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      precio: '',
      isbn: '',
      genero: '',
      autor: '',
      image: '',
    });

    // Read the product Id from the route parameter
    this.bookId = parseInt(this.activatedroute.snapshot.params['bookId']);
  }

  saveBook(): void {
    if (this.bookForm.valid) {
      if (this.bookForm.dirty) {
        this.book = this.bookForm.value;
        this.book.id = this.bookId;

        this.bookService.createBook(this.book).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.bookForm.reset();
    this.router.navigate(['']);
  }
}
