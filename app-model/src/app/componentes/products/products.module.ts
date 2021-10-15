import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PagesProductsComponent } from './presentation/pages/pages-products/pages-products.component';
import { ViewsComponent } from './presentation/view/views/views.component';


@NgModule({
  declarations: [
    PagesProductsComponent,
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [PagesProductsComponent]
})
export class ProductsModule { }
