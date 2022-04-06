import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  pageTitle = 'Nuevo libro';
  errorMessage: string;
  bookForm: FormGroup;

  prodId: number;
  book: Book;

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      titulo: '',
      precio: '',
      isbn: '',
      genero: '',
      autor: '',
      image: '',
    });

    // Read the Book Id from the route parameter
    this.prodId = parseInt(this.activatedroute.snapshot.params['BookId']);
  }

  saveBook(): void {
    if (this.bookForm.valid) {
      if (this.bookForm.dirty) {
        this.book = this.bookForm.value;
        this.book.id = this.prodId;

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
