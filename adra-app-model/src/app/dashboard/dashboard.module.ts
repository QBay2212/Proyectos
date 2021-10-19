import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesDashboardComponent } from './presentation/pages/pages-dashboard/pages-dashboard.component';
import { DashboardComponent } from './presentation/views/dashboard/dashboard.component';



@NgModule({
  declarations: [
    PagesDashboardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PagesDashboardComponent
  ]
})
export class DashboardModule {

}
