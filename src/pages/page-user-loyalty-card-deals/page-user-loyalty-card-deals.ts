import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import * as $ from "jquery";

import Config from '../../app/config';

import { Storage } from '@ionic/storage';
import { ApiService } from '../../service/api.service.component';

/**
 * Generated class for the PageUserLoyaltyCardDealsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-user-loyalty-card-deals',
  templateUrl: 'page-user-loyalty-card-deals.html',
})
export class UserLoyaltyCardDealsPage {
  deals: string[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api:ApiService,
    private storage: Storage) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.storage.get('user').then(user => {

      this.api.LoyaltyDeals.loyaltyDeal(user._id, user.account_type).then(deal => {
        this.deals = deal;
        console.log(deal)
      });

    });
  }

  backToLoyaltyCards() {
    this.navCtrl.pop({
      animate: true,
      direction: 'back'
    });
  }

}
