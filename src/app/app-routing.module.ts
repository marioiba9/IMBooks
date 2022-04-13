import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { BookDetailPage } from './book-detail/book-detail.page';
import { BookNewPage } from './book-new/book-new.page';
import { BookEditPage } from './book-edit/book-edit.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'books/:id/new', component: BookNewPage },
  { path: 'books/:bookId', component: BookDetailPage },
  { path: 'books/:id/edit', component: BookEditPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
