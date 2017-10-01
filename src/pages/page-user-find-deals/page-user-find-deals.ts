import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { ApiService } from '../../service/api.service.component';

import * as $ from "jquery";

@Component({
  selector: 'page-user-find-deals',
  templateUrl: 'page-user-find-deals.html'
})

export class UserFindDealsPage {
  pages: Array<{title: string, component: any}>;
  deals : string[]
  hasData :boolean = false
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private api : ApiService){
  }
  ionViewWillEnter(){
    this.api.Deals.deals_list().then(deals =>{
      this.deals = deals
      this.hasData = true
      console.log(this.deals)
    })
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

  IonViewDidLoad() {
  }
}
