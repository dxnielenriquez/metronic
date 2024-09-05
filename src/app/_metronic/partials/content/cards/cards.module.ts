import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { UserListComponent } from './user-list/user-list.component';
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbTooltipModule,
    DropdownMenusModule,
    SharedModule
  ],
  exports: [
    UserListComponent,
  ],
})
export class CardsModule {}
