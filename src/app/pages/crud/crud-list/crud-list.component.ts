import {Component, OnInit, ViewChild} from '@angular/core';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {User} from "../../../modules/auth";
import {CrudService} from "../crud.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSort} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-crud-list',
  standalone: true,
  imports: [
    SweetAlert2Module,
    MatPaginator,
    MatIcon,
    MatButton,
    RouterLink,
    MatFormField,
    MatTable,
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
    MatFormFieldModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss'
})
export class CrudListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}
