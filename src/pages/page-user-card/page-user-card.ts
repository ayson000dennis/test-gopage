import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { UserScannerPage } from '../page-user-scanner/page-user-scanner';
import { UserFavoritesPage } from '../page-user-favorites/page-user-favorites';
import { UserDealsPage } from '../page-user-deals/page-user-deals';

import * as $ from "jquery";

@Component({
  selector: 'page-user-card',
  templateUrl: 'page-user-card.html'
})

export class UserCardPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController,
    public platform: Platform){

    platform.ready().then(() => {
      var addActive = function() {
        if ($('.label-card').length > 0) {
          $('.label-card').addClass('active');
          clearInterval(_interval);
        }
      },
        _interval = setInterval(addActive, 1);
    });

    this.pages = [
      { title: 'loyalty', component: UserScannerPage },
      { title: 'favorites', component: UserFavoritesPage },
      { title: 'find deals', component: UserDealsPage },
      { title: 'card', component: UserCardPage }
    ];
  }

  goHome() {
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  openPage(page) {
    this.navCtrl.setRoot(page.component);
  }
}
