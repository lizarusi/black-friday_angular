/**
 * Created by lizarusi on 27.06.17.
 */
import {Component} from '@angular/core';
import { OnInit } from '@angular/core';

import { ProductService } from './shared/product.service';
import { Product} from './shared/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})

export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService){ }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
}
