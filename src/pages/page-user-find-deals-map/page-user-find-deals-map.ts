import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { CategoryMenuPage } from '../page-menu/page-category-menu/page-category-menu';
import { SortMenuPage } from '../page-menu/page-sort-menu/page-sort-menu';
import { ApiService } from '../../service/api.service.component';
import { UserDealsPage } from '../page-user-deals/page-user-deals';
import { UserFindDealsPage } from '../page-user-find-deals/page-user-find-deals';

import * as $ from "jquery";

@Component({
  selector: 'page-user-find-deals-map',
  templateUrl: 'page-user-find-deals-map.html'
})

export class UserFindDealsMapPage {
  pages: Array<{title: string, component: any}>;
  deals : string[]
  hasData :boolean = false
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private api : ApiService){
  }
  ionViewWillEnter(){

  }

  goHome() {
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  showCategoryMenu() {
    this.navCtrl.push(CategoryMenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  showSortMenu() {
    this.navCtrl.push(SortMenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  goListView() {
    this.navCtrl.setRoot(UserFindDealsPage, {}, {
      animate: true,
      direction: 'back'
    });
  }
}
