import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {MatSelectModule} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../_metronic/shared/shared.module";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButton,
    NgbModalModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatIconModule,
    MatFormField,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatTooltip,
    MatIconButton,
    MatColumnDef,
    MatSort,
    MatInput,
    MatButton,
    RouterLink,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    FormsModule,
    MatSortHeader,
    SweetAlert2Module.forChild(),

  ],
  exports: [
    SharedModule,
    MatTableModule,
    MatButton,
    NgbModalModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatIconModule,
    MatFormField,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatTooltip,
    MatIconButton,
    MatColumnDef,
    MatSort,
    MatInput,
    MatButton,
    RouterLink,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    FormsModule,
    MatSortHeader,
  ],
})
export class ShareModule {
}
