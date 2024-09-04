import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsWidget18Component } from './_new/cards/cards-widget18/cards-widget18.component';
import { SharedModule } from "../../../shared/shared.module";
@NgModule({
  declarations: [
    CardsWidget18Component,
  ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    SharedModule
  ],
  exports: [

    CardsWidget18Component
  ],
})
export class WidgetsModule {}
