import { Component, OnInit } from '@angular/core';
import { BookService } from '..//shared/book.service';
import { Book } from '..//shared/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  prodId: number;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private BookService: BookService
  ) {}

  ngOnInit() {
    this.prodId = parseInt(this.activatedroute.snapshot.params['BookId']);
    this.BookService.getBookById(this.prodId).subscribe(
      (data: Book) => (this.book = data)
    );
  }
  goEdit(): void {
    this.router.navigate(['/Books', this.prodId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
