import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthComponent } from './auth.component';
import { TranslationModule } from '../i18n/translation.module';
import {tokenInterceptor} from "../interceptors/token.interceptor";
import {baseUrlInterceptor} from "../interceptors/base-url.interceptor";
import {SesionComponent} from "./components/sesion/sesion.component";
import {NetworkModule} from "../interceptors/network.module";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    TranslationModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NetworkModule
  ],


})
export class AuthModule {}
