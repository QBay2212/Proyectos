import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PagesUsersComponent } from './presentation/pages/pages-users/pages-users.component';
import { UsersComponent } from './presentation/views/users/users.component';


@NgModule({
  declarations: [
    PagesUsersComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [PagesUsersComponent]
})
export class UsersModule { }
