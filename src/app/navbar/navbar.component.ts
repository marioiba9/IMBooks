import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  id: any;
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  newBook() {
    // Get max product Id from the product list
    this.bookService.getMaxBookId().subscribe((data) => (this.id = data));
    this.router.navigate(['/books', this.id, 'new']);
  }
}
