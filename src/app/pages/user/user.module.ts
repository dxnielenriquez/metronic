import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing/user-listing.component';
import {RouterLink, RouterModule} from '@angular/router';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSort} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {MatInput, MatInputModule} from "@angular/material/input";
import {CrudModule} from "../../modules/crudejemplo/crud/crud.module";
import {CrudEditComponent} from "../../modules/crudejemplo/crud-edit/crud-edit.component";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [UserListingComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    SweetAlert2Module,
    MatPaginator,
    MatIcon,
    MatButton,
    RouterLink,
    MatFormField,
    MatTable,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSort,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatTooltip,
    MatIconButton,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatInput,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: 'usuarios',
        component: UserListingComponent,
      },
      {
        path: 'usuarios/:id',
        component: CrudEditComponent,
      },
      {
        path: 'usuarios/edit/:id',
        component: CrudEditComponent,
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
