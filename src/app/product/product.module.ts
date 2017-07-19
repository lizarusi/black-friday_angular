/**
 * Created by lizarusi on 12.07.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductBoxComponent } from './product-box/product-box.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductBoxComponent,
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
