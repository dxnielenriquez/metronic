import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing/user-listing.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {CrudComponent} from "../../modules/crud/crud.component";
import {CrudListComponent} from "../crud/crud-list/crud-list.component";



@NgModule({
  declarations: [UserListingComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'usuarios',
        component: UserListingComponent,
      },
      {
        path: 'usuarios/:id',
        component: UserDetailsComponent,
      },
      {
        path: 'crud',
        component: CrudListComponent,
      },
    ]),
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ]
})
export class UserModule { }
