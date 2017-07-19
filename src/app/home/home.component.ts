/**
 * Created by lizarusi on 26.06.17.
 */
import {Component, OnInit} from '@angular/core';
import { ProductService } from '../core/product.service';
import {Product} from '../core/product.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  products: Product[];
  constructor( private productService: ProductService ){  }
  ngOnInit(): void{
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().then( products =>
      this.products = products )
      .catch((err) => {
        console.log(err);
        this.products = <Product[]>([]);
      })
  }
}
