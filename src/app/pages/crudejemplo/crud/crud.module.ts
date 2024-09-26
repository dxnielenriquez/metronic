import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudComponent} from './crud.component';
import {DataTablesModule} from 'angular-datatables';
import {ShareModule} from "../../../share/share.module";
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ShareModule,
    NgxPermissionsModule,
  ],
  exports: [CrudComponent]
})
export class CrudModule {
}
