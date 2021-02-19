import { Component, HostBinding } from '@angular/core';
import { OseThemeService } from '@ose/commons/theme';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../app/core/service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class')

  get attrClass() {
    return this.themeService.theme;
  }

  constructor(
    private themeService: OseThemeService,
    public translate: TranslateService,
    public config: ConfigService,
  ) {
    this.translate.setDefaultLang('en');
    this.config.translate('es');
  }

}
