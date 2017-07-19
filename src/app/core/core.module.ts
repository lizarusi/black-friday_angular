/**
 * Created by lizarusi on 13.07.17.
 */
import {
  NgModule,
  Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import { ProductService } from './product.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ CommonModule,
             FormsModule,
             HttpModule,
             InMemoryWebApiModule.forRoot(InMemoryDataService),
           ],
  providers:  [ ProductService ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
