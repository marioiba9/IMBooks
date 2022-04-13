import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.page.html',
  styleUrls: ['./book-item.page.scss'],
})
export class BookItemPage {
  @Input() book: Book;
}
