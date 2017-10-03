import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { UserDealsPage } from '../page-user-deals/page-user-deals';

import { ApiService } from '../../service/api.service.component';
import * as $ from "jquery";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-user-favorites',
  templateUrl: 'page-user-favorites.html'
})

export class UserFavoritesPage {
  pages: Array<{title: string, component: any}>;
  favorites : String[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private api : ApiService,
    private storage : Storage)
    {}

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

  ionViewWillEnter() {
    this.getFavorites();
  }


  getFavorites() {
    this.storage.get("user").then(user => {
      this.api.Favorites.favorite_list(user._id).then(favorites => {
        this.favorites = favorites;
        console.log(favorites);
      });
    });
  }

  getBusiness(business) {
    this.navCtrl.push(UserDealsPage, {business : business}, {
       animate: true,
       direction: 'forward'
    });
  }

}
