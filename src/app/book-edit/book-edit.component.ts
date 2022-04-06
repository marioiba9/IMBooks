import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  templateUrl: './book-edit.component.html',
})
export class BookEditComponent implements OnInit {
  pageTitle = 'Book Edit';
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
    this.prodId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getBook(this.prodId);
  }

  getBook(id: number): void {
    this.bookService.getBookById(id).subscribe(
      (Book: Book) => this.displayBook(Book),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayBook(Book: Book): void {
    if (this.bookForm) {
      this.bookForm.reset();
    }
    this.book = Book;
    this.pageTitle = `Editar libro: ${this.book.titulo}`;

    // Update the data on the form
    this.bookForm.patchValue({
      titulo: this.book.titulo,
      precio: this.book.precio,
      isbn: this.book.isbn,
      genero: this.book.genero,
      autor: this.book.autor,
      image: this.book.image,
    });
  }

  deleteBook(): void {
    if (this.book.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Desea eliminar el libro: ${this.book.titulo}?`)) {
        this.bookService.deleteBook(this.book.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  saveBook(): void {
    if (this.bookForm.valid) {
      if (this.bookForm.dirty) {
        this.book = this.bookForm.value;
        this.book.id = this.prodId;

        this.bookService.updateBook(this.book).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Corrige los errores de validación.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.bookForm.reset();
    this.router.navigate(['']);
  }
}
