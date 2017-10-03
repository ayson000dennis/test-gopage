import { Component } from '@angular/core';
import { Platform, NavController,NavParams } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { ApiService } from '../../service/api.service.component';
import { Storage } from '@ionic/storage'

import * as $ from "jquery";

@Component({
  selector: 'page-user-deals',
  templateUrl: 'page-user-deals.html'
})

export class UserDealsPage {
  pages: Array<{title: string, component: any}>;
  business : string[]
  deals : string[]
  hasData :boolean = false
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParams : NavParams,
    private api : ApiService,
    private storage : Storage){
  }

  ionViewWillEnter(){
    this.business = this.navParams.get('business');
    console.log(this.business);

    this.api.Deals.deals_list(this.business._id).then(deals =>{
      this.deals = deals
      this.hasData =true
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
