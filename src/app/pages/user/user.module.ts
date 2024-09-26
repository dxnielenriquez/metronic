import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/_metronic/shared/shared.module';
import {NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CrudModule} from "../crudejemplo/crud/crud.module";
import {CrudEditComponent} from "../crudejemplo/crud-edit/crud-edit.component";
import {ShareModule} from "../../share/share.module";
import {CrudComponent} from "../crudejemplo/crud/crud.component";

const routes: Routes = [
  {
    path: 'usuarios',
    component: CrudComponent,
  },
  {
    path: 'usuarios/:id',
    component: CrudEditComponent,
  },
  {
    path: 'usuarios/edit/:id',
    component: CrudEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ShareModule,
    RouterModule.forChild(routes),
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
  ]
})
export class UserModule {
}
