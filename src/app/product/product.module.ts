/**
 * Created by lizarusi on 12.07.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductBoxComponent }
        from './product-box/product-box.component';
import { ProductSearchComponent }
        from './product-search/product-search.component';
import { ProductService } from './shared/product.service';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductBoxComponent,
    ProductsComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService],
})
export class ProductModule { }
