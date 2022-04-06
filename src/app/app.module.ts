import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './shared/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookData } from './shared/book-data';
import { HttpClientModule } from '@angular/common/http';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BookItemComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BookData),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
