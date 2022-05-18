import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  ionViewWillEnter() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
