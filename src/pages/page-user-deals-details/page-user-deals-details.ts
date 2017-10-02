import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDealsPage } from '../page-user-deals/page-user-deals';

import * as $ from "jquery";

@Component({
  selector: 'page-user-deals-details',
  templateUrl: 'page-user-deals-details.html'
})

export class UserDealsDetailsPage {

  constructor(public navCtrl: NavController){
  }

  goBack() {
    this.navCtrl.setRoot(UserDealsPage, {}, {
      animate: true,
      direction: 'back'
    });
  }
}
