import {AsyncPipe} from "@angular/common";
import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {IonAvatar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile',
  template: `
    @if (auth.user$ | async; as user) {
      <ion-avatar class="avatar">
        <img [src]="user.picture" [alt]="user.name"/>
      </ion-avatar>
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    }`,
  imports: [
    IonAvatar,
    AsyncPipe
  ],
  standalone: true
})
export class ProfileComponent {
  constructor(public auth: AuthService) {
  }
}
