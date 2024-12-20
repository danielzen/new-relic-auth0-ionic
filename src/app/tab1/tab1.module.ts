import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProfileComponent} from "../components/profile.component";
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {LoginButtonComponent} from "../components/login-button.component";
import {LogoutButtonComponent} from "../components/logout-button.component";

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {Tab1Page} from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
