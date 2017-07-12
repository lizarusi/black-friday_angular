import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductsComponent } from './product/products.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { ProductSearchComponent } from "./product/product-search/product-search.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductBoxComponent,
    ProductsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
