import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    ModalsModule,
  ],
})
export class DashboardModule {}
