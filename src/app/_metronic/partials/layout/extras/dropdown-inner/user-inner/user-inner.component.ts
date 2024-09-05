import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../../../../modules/auth';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-inner',
  templateUrl: './user-inner.component.html',
})
export class UserInnerComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  class = `menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px`;
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  username: string = '';


  language: LanguageFlag;
  private unsubscribe: Subscription[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.username = this.auth.getUser().nombre + ' ' + this.auth.getUser().apellido_paterno || '';

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

