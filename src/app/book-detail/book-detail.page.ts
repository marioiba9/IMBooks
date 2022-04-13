import { Component, OnInit } from '@angular/core';

import { BookService } from '..//shared/book.service';
import { Book } from '..//shared/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  public book: Book;
  bookId: number;
  isLoading: boolean = true;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private BookService: BookService
  ) {}

  ngOnInit() {
    this.bookId = parseInt(this.activatedroute.snapshot.params['bookId']);
    this.BookService.getBookById(this.bookId).subscribe((data: Book) => {
      this.book = data;
      this.isLoading = false;
    });
  }
  goEdit(): void {
    this.router.navigate(['/books', this.bookId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
