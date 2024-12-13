import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {Browser} from '@capacitor/browser';
import {IonButton, isPlatform} from "@ionic/angular/standalone";
import config from "../../../capacitor.config";

// Build the URL to return back to your app after logout
const returnTo = isPlatform('hybrid') ?
  `${config.appId}://onecheck.us.auth0.com/capacitor/${config.appId}/callback` :
  'http://localhost:4200';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-button (click)="logout()">Log out</ion-button>`,
  imports: [
    IonButton
  ],
  standalone: true
})
export class LogoutButtonComponent {
  // Import the AuthService module from the Auth0 Angular SDK
  constructor(public auth: AuthService) {
  }

  logout() {
    this.auth
      .logout({
        logoutParams: {
          returnTo,
        },
        async openUrl(url: string) {
          await Browser.open({url});
        }
      })
      .subscribe();
  }
}
