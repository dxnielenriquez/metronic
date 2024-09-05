import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../../pages/crud/crud.service';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.scss'],
})
export class CrudEditComponent implements OnInit {

  isCreateMode = false;
  idUser: number = 0;
  isNewUser: boolean = true;
  roles: any[] = [];
  usuario: any = {};
  rol: any;

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _activeroute: ActivatedRoute,
    private _encuestaService: CrudService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activeroute.params.subscribe(params => {
      this.isCreateMode = params['id'] == null;
      this.idUser = params['id'];
      this.destinatarios();
      this.rol = this._encuestaService.getRole()

    });
  }

  ngOnInit(): void {
    this.crearFormulario();
    if (this.idUser && this.idUser > 0) {
      this._encuestaService.show(this.idUser).subscribe(res => {
        this.form.patchValue(res);
      });
      this.isNewUser = false;
    } else {
      this.isNewUser = true;
    }
  }

  crearFormulario() {
    this.form = this._fb.group({
      titulo: ["", [Validators.required, Validators.pattern(/^([ \u00c0-\u01ffa-zA-Z'])+$/)]],
      descripcion: ["", [Validators.required, Validators.pattern(/^([ \u00c0-\u01ffa-zA-Z'])+$/)]],
      destinatario: [""],
      ponderacion_baja: ["", [Validators.required]],
      ponderacion_alta: ["", [Validators.required]],
      role_id: [1],
    });
  }

  destinatarios() {
    this._encuestaService.destinatarios().subscribe(res => {
      this.roles = res;
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(controlName =>
        this.form.controls[controlName].markAsTouched()
      );
      return;
    }

    const editedUser = this.form.value;
    if (!this.isNewUser) {
      this.updateUsuario(this.idUser, editedUser);
    } else {
      this.addUsuario(editedUser);
    }
  }

  backRoute(){
    this._router.navigateByUrl("catalogo/usuarios")
  }

  addUsuario(user: any) {
    this._encuestaService.create(user).subscribe(() => {
      this._router.navigate(['/catalogo/usuarios'], { relativeTo: this._activatedRoute });
    });
  }

  updateUsuario(id: any, user: any) {
    this._encuestaService.update(id, user).subscribe(() => {
      this._router.navigate(['../../'], { relativeTo: this._activatedRoute });
    });
  }
}
