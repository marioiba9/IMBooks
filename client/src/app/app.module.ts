import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookDetailPage } from './book-detail/book-detail.page';
import { BookEditPage } from './book-edit/book-edit.page';
import { BookItemPage } from './book-item/book-item.page';
import { BookNewPage } from './book-new/book-new.page';
import { BookService } from './shared/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './shared/book-data';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    BookDetailPage,
    BookEditPage,
    BookItemPage,
    BookNewPage,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(BookData),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BookService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
