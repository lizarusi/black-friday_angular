/**
 * Created by lizarusi on 17.07.17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsStoreComponent } from './products-store.component';
import { StoreRoutingModule } from './products-store.routing';

@NgModule({
  declarations: [ ProductsStoreComponent ],
  imports: [ StoreRoutingModule, CommonModule, FormsModule ],
})

export class ProductsStoreModule {}
