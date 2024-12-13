import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

// Import the types from the SDK
import {AuthModule} from '@auth0/auth0-angular';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {isPlatform} from '@ionic/angular/standalone';
import config from '../../capacitor.config';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Build the URL that Auth0 should redirect back to
export const redirect_uri = isPlatform('hybrid') ?
  `${config.appId}://onecheck.us.auth0.com/capacitor/${config.appId}/callback` :
  'http://localhost:4200/tabs/tab2';

// Register AuthModule with your AppModule
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "onecheck.us.auth0.com",
      clientId: "JznYoFDdujVgdxp49tF7TT0HL9kNcwj9",
      useRefreshTokens: isPlatform('hybrid'),
      useRefreshTokensFallback: false,
      authorizationParams: {
        redirect_uri,
      }
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
