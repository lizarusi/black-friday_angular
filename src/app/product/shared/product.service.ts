/**
 * Created by lizarusi on 27.06.17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Product } from './product.model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise'


@Injectable()

export class ProductService {
  private apiUrl = 'api';
  constructor(private http: Http){}
  getProducts(): Promise<Product[]> {
    return this.http.get('${this.apiUrl}/products')
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }
  searchProducts(term): Observable<Product[]> {
    return this.http.get(`${this.apiUrl}/products/?title=${term}`)
               .map(response => response.json().data as Product[])
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

