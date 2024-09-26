import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/_metronic/shared/shared.module';
import {NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CrudEditComponent} from "./crudejemplo/crud-edit/crud-edit.component";
import {CrudComponent} from "./crudejemplo/crud/crud.component";
import {ShareModule} from "../share/share.module";

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
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ShareModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
  ],
  exports: [CrudComponent]
})
export class PagesModule {
}
