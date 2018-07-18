import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';
import { CookieService } from 'ngx-cookie-service';

import { UsersModule } from './components/users/users.module';

import { APP_STATES } from './commons/states/app.states';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),

    UsersModule
  ],
  providers: [
    CookieService,
    // { provide: HTTP_INTERCEPTORS, useClass: XsrfService, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
