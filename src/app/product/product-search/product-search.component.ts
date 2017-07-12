/**
 * Created by lizarusi on 02.07.17.
 */
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ProductService } from '../shared/product.service'
import {Product} from '../shared/product.model';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})

export class ProductSearchComponent implements OnInit {

  @ViewChild('productSearch') searchField: ElementRef;
  products: Product[];
  autocomplete: boolean;
  term = '';
  private searchTerms = new Subject<string>();
  constructor(private productService: ProductService) {};
  inputChange(): void {
    this.autocomplete = true;
    this.search();
  }
  search(): void {
    this.searchTerms.next(this.term);
  }
  ngOnInit(): void {
    this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap( term => this.productService.searchProducts(term))
      .catch((err) => {
        console.log(err);
        return Observable.of<Product[]>([]);
      })
      .subscribe( results =>
                  this.products = results.filter(r => r.title !== this.term))

  }
  closeAutocomplete(event: any): void {
    this.autocomplete = false;
  }
  activeAutocomplete(): void {
    this.autocomplete = true;
    this.search();
  }
  update(value: string, e: any): void {
    e.preventDefault();
    e.stopPropagation();
    this.term = value;
    this.inputChange();
  }
}
