import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';

import * as $ from "jquery";

import Config from '../../app/config';

import { Storage } from '@ionic/storage';
import { ApiService } from '../../service/api.service.component';

import { UserLoyaltyCardDealsPage } from '../page-user-loyalty-card-deals/page-user-loyalty-card-deals';

@Component({
  selector: 'page-user-loyalty-cards',
  templateUrl: 'page-user-loyalty-cards.html'
})

export class UserLoyaltyCardsPage {
  pages: Array<{title: string, component: any}>;
  user : string[];
  loyalties : string[];

  constructor(
    public navCtrl: NavController,
    private api:ApiService,
    private storage: Storage) {
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  ionViewWillEnter() {
    this.storage.get('user').then(user => {
      this.api.LoyaltyCards.loyaltyCard(user._id).then(loyalty => {
        this.loyalties = loyalty[0].business_id;
        //console.log(loyalty)
      });

    });
  }

  showCardDeals() {
    this.navCtrl.push(UserLoyaltyCardDealsPage, {
      animate: true,
      direction: 'forward'
    });
  }


}
