import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ThemeModeService} from "./_metronic/partials/layout/theme-mode-switcher/theme-mode.service";

@Component({

  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private modeService: ThemeModeService
  ) {
    // this.translationService.loadTranslations(
    // );
  }

  ngOnInit() {
    this.modeService.init();
  }
}
