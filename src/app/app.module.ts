import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {SharedModule} from "./_metronic/shared/shared.module";
import {tokenInterceptor} from "./share/interceptors/token.interceptor";
import {baseUrlInterceptor} from "./share/interceptors/base-url.interceptor";
import {CrudEditComponent} from "./pages/crudejemplo/crud-edit/crud-edit.component";
import { DeleteEntityDialogComponent } from './share/dialogs/delete-entity-dialog/delete-entity-dialog.component';
import {errorInterceptor} from "./share/interceptors/error.interceptor";


@NgModule({
  declarations: [AppComponent, CrudEditComponent, DeleteEntityDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClipboardModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    SweetAlert2Module.forRoot(),
    MatIcon,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatInput,
    MatOption,
    MatInputModule,
    SharedModule,
    MatIconModule,



  ],
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor, tokenInterceptor, errorInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
