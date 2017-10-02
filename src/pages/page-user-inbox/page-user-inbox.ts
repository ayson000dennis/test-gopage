import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../page-menu/page-menu';

import * as $ from "jquery";

import Config from '../../app/config';

@Component({
  selector: 'page-user-inbox',
  templateUrl: 'page-user-inbox.html'
})

export class UserInboxPage {
  constructor(
    public navCtrl: NavController) {
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }
}
