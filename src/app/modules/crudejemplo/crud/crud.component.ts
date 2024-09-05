import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";
import { PageEvent} from "@angular/material/paginator";
import {User} from "../../auth";
import {CrudService} from "../../../pages/crud/crud.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter<number>();

  dataSourceUser = new MatTableDataSource<User>;
  query: string = '';
  sortBy = 'cat_encuesta.id';
  order = 'asc';
  page = 1;
  perPage = 10;
  total = 0;
  pages = [10, 25, 50, 100];
  displayedColumns: string[] = ['titulo', 'descripcion', 'destinatario', 'ponderacion_baja', 'ponderacion_alta', 'actions'];
  typingTimer: any;
  typingInterval = 700;
  lastLength = 0;
  isLoading = true;
  private idInAction: number;

  constructor(
    private _userService: CrudService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    // private _layoutUtilsService: LayoutUtilsService,
  ) {
  }

  ngOnInit() {
    this.getUsuarios()
    this.dataSourceUser = new MatTableDataSource<User>();
    this.dataSourceUser.data = [];
  }

  getUsuarios(): void {

    const sortBy = this.sortBy;
    const order = this.order;
    const page = this.page;
    const perPage = this.perPage;
    const query = this.query;

    this._userService.getUsuarios(sortBy, order, page, perPage, query)
      .subscribe((res: any) => {

        this.dataSourceUser.data = res.data;
        this.total = res.total;

      });
  }
  // ejemplo con msj de eliminacion
  deleteEncuesta(data: any) {
    let title = data.deleted_at ? 'Activar' : 'Eliminar ';
    let description = data.deleted_at ? '¿Está seguro de activar ' + data.titulo + '?' :  '¿Está seguro de eliminar ' + data.titulo + '?';
    let waitDesciption = data.deleted_at ? 'Activandio...' : 'Eliminando...';
    let boton = data.deleted_at ? 'Activar' : 'Eliminar';

    // let dialogRef = this._layoutUtilsService.deleteElement(title, description, waitDesciption, boton);

    this.isLoading = true;
      this._userService.delete(data.id).subscribe(() => {
        this.getUsuarios();
      });
    // dialogRef.afterClosed().subscribe(async (res) => {
    //   if (!res) {
    //     this.isLoading = false;
    //     return;
    //   }
    //   this._userService.delete(data.id).subscribe(() => {
    //     this.getUsuarios();
    //   });
    // });
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getUsuarios();
  }

  onKeyUp(ev: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.filtrarBusqueda(ev.target.value)
    }, this.typingInterval);
  }

  onKeyDown() {
    clearTimeout(this.typingTimer);
  }

  filtrarBusqueda(filterValue: string) {
    if (filterValue.length != 0) {
      this.query = filterValue.trim().toLowerCase();
      this.getUsuarios();
    } else if (this.lastLength != 0) {
      this.query = '';
      this.getUsuarios();
    }

    this.lastLength = filterValue.length;
  }

  editEncuesta(id: any) {
    this._router.navigate(['../usuarios/edit/', id], { relativeTo: this._activatedRoute });
  }

  sort(event: any) {
    this.order = event.direction;
    this.sortBy = event.active;
    this.getUsuarios();
  }

}
