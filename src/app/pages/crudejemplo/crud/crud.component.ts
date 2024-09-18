import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";
import {CrudService} from "../crud.service";
import {User} from "../../../share/services/auth.service";
import {LayoutUtilsService} from "../../../share/components/utils/layout-utils.service";
import Swal from 'sweetalert2';

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
  isLoading = true;
  totalPages = Math.ceil(this.total / this.perPage);

  constructor(
    private _userService: CrudService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _layoutUtilsService: LayoutUtilsService,

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

    this._userService.getUsuarios(sortBy, order, page, perPage, query).subscribe((res: any) => {
      this.dataSourceUser.data = res.data;
      this.total = res.total;
      this.totalPages = Math.ceil(this.total / this.perPage);
    });
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.query = input.value.trim().toLowerCase();
    this.getUsuarios();
  }

  deleteEncuesta(data: any) {
    let title = data.deleted_at ? 'Activar' : 'Eliminar';
    let description = data.deleted_at
      ? `¿Está seguro de activar ${data.titulo}?`
      : `¿Está seguro de eliminar ${data.titulo}?`;
    let buttonText = data.deleted_at ? 'Activar' : 'Eliminar';

    Swal.fire({
      title: title,
      text: description,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: buttonText,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.delete(data.id).subscribe({
          next: () => {
            Swal.fire(
              '¡Hecho!',
              data.deleted_at
                ? 'La encuesta ha sido activada.'
                : 'La encuesta ha sido eliminada.',
              'success'
            );
            this.getUsuarios();
          },
          error: (err) => {
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar la encuesta. Por favor, inténtelo de nuevo.',
              'error'
            );
          }
        });
      }
    });
  }



  pageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
      this.getUsuarios();
    }
  }

  paginationRange(): number[] {
    const start = Math.max(1, this.page - 2);
    const end = Math.min(this.totalPages, this.page + 2);
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
  }

  editEncuesta(id: any) {
    this._router.navigate(['../usuarios/edit/', id], { relativeTo: this._activatedRoute });
  }

  sort(event: any) {
    this.order = event.direction;
    this.sortBy = event.active;
    this.getUsuarios();
  }

  onPerPageChange(event: any): void {
    this.perPage = parseInt(event.target.value, 10);
    this.page = 1;
    this.getUsuarios();
  }

  protected readonly Math = Math;
}
