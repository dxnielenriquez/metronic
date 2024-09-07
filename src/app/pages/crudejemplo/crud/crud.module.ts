import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSort} from "@angular/material/sort";
import {MatInput, MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../../../_metronic/shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CrudComponent],
    imports: [
        CommonModule, DataTablesModule,
        SweetAlert2Module.forChild(),

        NgbModalModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIcon, MatIconModule, MatFormField, MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginator, MatTooltip, MatIconButton, MatColumnDef, MatSort, MatInput, MatButton, RouterLink, MatHeaderRowDef, MatRowDef, MatHeaderCellDef, MatCellDef, SharedModule, FormsModule,
    ],
  exports: [CrudComponent]
})
export class CrudModule { }
