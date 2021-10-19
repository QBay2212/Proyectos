import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesLoginComponent } from './core/presentation/pages/pages-login/pages-login.component';
import { PagesUserComponent } from './users/presentation/pages/pages-user/pages-user.component';
import { PagesProductComponent } from './products/presentation/pages/pages-product/pages-product.component';
import { PagesDashboardComponent } from './dashboard/presentation/pages/pages-dashboard/pages-dashboard.component';

import { DashboardModule } from "./dashboard/dashboard.module";
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';


const routes : Routes =[
  {path: '', component:PagesLoginComponent},
  {path: 'users', component: PagesUserComponent},
  {path: 'products', component: PagesProductComponent},
  {path: 'dashboard', component: PagesDashboardComponent},
  {path: '**', component: PagesLoginComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    ProductsModule,
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
