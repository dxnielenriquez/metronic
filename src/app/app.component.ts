import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ThemeModeService} from "./_metronic/partials/layout/theme-mode-switcher/theme-mode.service";
import {NgxPermissionsService} from "ngx-permissions";
import {AuthService} from "./share/services/auth.service";

@Component({

  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  permissions: { [key: string]: boolean };

  constructor(
    private modeService: ThemeModeService,
    private ngxPermissions: NgxPermissionsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {

    this.modeService.init();
    this.loadPermissions();
  }


  loadPermissions() {
    const perms = this.authService.getPermissions();
    this.ngxPermissions.flushPermissions()
    Object.keys(perms).forEach(key => {
      if (perms[key]) {
        this.ngxPermissions.addPermission(key);
      }
    })
  }


}
