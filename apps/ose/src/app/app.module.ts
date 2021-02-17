import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { OseThemeModule } from '@ose/commons/theme';
import { OsePermissionGuardModule } from '@ose/commons/guards';
import { AuthInterceptor } from '../app/features/auth/commons/http/authInterceptor';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localeEs);
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
 }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OseThemeModule,
    OsePermissionGuardModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      // defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
       provide: LOCALE_ID, useValue: 'en' 
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:  AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
