import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {App} from "@capacitor/app";
import {Browser} from "@capacitor/browser";
import {NavController} from "@ionic/angular";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  // Import the AuthService module from the Auth0 Angular SDK
  private callbackUri = 'http://localhost:4200/tabs/tab2';
  constructor(public auth: AuthService, private ngZone: NgZone, private navCtrl: NavController) {}

  ngOnInit(): void {
    // Use Capacitor's App plugin to subscribe to the `appUrlOpen` event
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(this.callbackUri)) {
          // If the URL is an authentication callback URL..
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            console.log('handleRedirectCallback:', url);
            // Call handleRedirectCallback and close the browser
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
            this.navCtrl.navigateRoot('/tabs/tab2');
          } else {
            Browser.close();
          }
        }
      });
    });
  }
}
