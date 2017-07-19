/**
 * Created by lizarusi on 27.06.17.
 */
import {Component, Input} from '@angular/core';

import { Product } from '../core/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent {
  @Input() products: Product[];
}
