import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Books/:id/new', component: BookNewComponent },
  { path: 'Books/:BookId', component: BookDetailComponent },
  { path: 'Books/:id/edit', component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
