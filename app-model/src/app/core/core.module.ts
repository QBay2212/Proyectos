import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLoginComponent } from './presentation/pages/pages-login/pages-login.component';
import { LoginComponent } from './presentation/views/login/login.component';



@NgModule({
  declarations: [
    PagesLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PagesLoginComponent]
})
export class CoreModule { }
