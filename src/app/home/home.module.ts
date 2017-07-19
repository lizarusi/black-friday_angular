/**
 * Created by lizarusi on 13.07.17.
 */
/**
 * Created by lizarusi on 12.07.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
// TODO: delete this (move to shared or smth)
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
