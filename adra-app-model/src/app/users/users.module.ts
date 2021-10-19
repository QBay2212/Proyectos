import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PagesUserComponent } from './presentation/pages/pages-user/pages-user.component';
import { UserComponent } from './presentation/views/user/user.component';


@NgModule({
  declarations: [
    PagesUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[PagesUserComponent],
})
export class UsersModule { }
