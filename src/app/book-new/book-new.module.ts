import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookNewPageRoutingModule } from './book-new-routing.module';

import { BookNewPage } from './book-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookNewPageRoutingModule
  ],
  declarations: [BookNewPage]
})
export class BookNewPageModule {}
