import {importProvidersFrom,  NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./_metronic/shared/shared.module";
import {tokenInterceptor} from "./share/interceptors/token.interceptor";
import {baseUrlInterceptor} from "./share/interceptors/base-url.interceptor";
import {CrudEditComponent} from "./pages/crudejemplo/crud-edit/crud-edit.component";
import {DeleteEntityDialogComponent} from './share/dialogs/delete-entity-dialog/delete-entity-dialog.component';
import {errorInterceptor} from "./share/interceptors/error.interceptor";
import {ShareModule} from "./share/share.module";
import {NgxPermissionsModule} from "ngx-permissions";


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
    ReactiveFormsModule,
    SharedModule,
    ShareModule

  ],
  providers: [
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    provideHttpClient(withInterceptors([baseUrlInterceptor, tokenInterceptor, errorInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
