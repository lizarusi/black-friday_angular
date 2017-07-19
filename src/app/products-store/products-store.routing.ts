/**
 * Created by lizarusi on 17.07.17.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ProductsStoreComponent } from './products-store.component';

const routes: Routes = [
  { path: '', component: ProductsStoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule {}
