/**
 * Created by lizarusi on 15.07.17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductSearchComponent } from './header/product-search/product-search.component';



@NgModule({
  imports: [ CommonModule,
             FormsModule,
             RouterModule
  ],
  declarations: [ FooterComponent,
                  LayoutComponent,
                  HeaderComponent,
                  ProductSearchComponent
  ],
  exports: [ LayoutComponent ],
})
export class LayoutModule {}
