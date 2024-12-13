import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {Browser} from '@capacitor/browser';
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-login-button',
  template: `
    <ion-button (click)="login()">Login</ion-button>`,
  imports: [
    IonButton
  ],
  standalone: true
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) {
  }

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          await Browser.open({url, windowName: '_self'});
        }
      })
      .subscribe();
  }
}
