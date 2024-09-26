import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudComponent} from './crud.component';
import {DataTablesModule} from 'angular-datatables';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ShareModule} from "../../../share/share.module";
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    SweetAlert2Module.forChild(),
    ShareModule,
    NgxPermissionsModule,
  ],
  exports: [CrudComponent]
})
export class CrudModule {
}
