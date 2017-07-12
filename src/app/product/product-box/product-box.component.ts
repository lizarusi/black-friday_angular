/**
 * Created by lizarusi on 26.06.17.
 */
import {Component, Input, OnInit} from '@angular/core';
import { Http } from '@angular/http';

import { Product} from '../shared/product.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let brandLogos = {
  amazon: 'assets/amazon-logo-plain.png',
  ebay: 'assets/e-bay-logo.png'
};

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})

export class ProductBoxComponent implements OnInit {
  @Input() product: Product;
  brandLogo: string;
  constructor(private http: Http) {};
  ngOnInit(): void {
    this.getBrandLogo();
  }
  getBrandLogo(): void {
    Promise.resolve(brandLogos[this.product.brand])
      .then(
        logo => this.brandLogo = logo
      )
  }
}
