import {importProvidersFrom, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {baseUrlInterceptor} from "./base-url.interceptor";
import {tokenInterceptor} from "./token.interceptor";


@NgModule({
  exports: [
    HttpClientModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
})
export class NetworkModule { }
