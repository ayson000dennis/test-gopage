import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as $ from "jquery";

import Config from '../../../app/config';

@Component({
  selector: 'page-category-menu',
  templateUrl: 'page-category-menu.html'
})

export class CategoryMenuPage {
  pages: Array<{title: string, component: any}>;

  constructor(
    public navCtrl: NavController) {

    // this.pages = [
    //   { title: 'membership card', component: UserMembershipCardPage },
    //   { title: 'loyalty cards', component: UserLoyaltyCardsPage },
    //   { title: 'find deals', component: UserFindDealsPage },
    //   { title: 'favorites', component: UserFavoritesPage },
    //   { title: 'inbox', component: UserInboxPage }
    // ];
  }

  goBack() {
    this.navCtrl.pop({
      animate: true,
      direction: 'back'
    });
  }

  openPage(page) {
    this.navCtrl.setRoot(page.component, {}, {
      animate: true,
      direction: 'back'
    });
  }

}