import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { TranslationModule } from '../i18n';
import {ShareModule} from "../../share/share.module";
import {MatButton} from "@angular/material/button";
import {ModalAlertComponent} from "../../share/components/modal-alert/modal-alert.component";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent

  ],
  imports: [
    CommonModule,
    TranslationModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    MatButton,
    ModalAlertComponent,
  ],
  exports: [
    ModalAlertComponent
  ]


})
export class AuthModule {}
