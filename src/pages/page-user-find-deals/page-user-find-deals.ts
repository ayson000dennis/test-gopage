import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { CategoryMenuPage } from '../page-menu/page-category-menu/page-category-menu';
import { SortMenuPage } from '../page-menu/page-sort-menu/page-sort-menu';
import { ApiService } from '../../service/api.service.component';
import { UserDealsPage } from '../page-user-deals/page-user-deals';
import * as $ from "jquery";
import { Storage } from '@ionic/storage'

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
    private api : ApiService,
  private storage : Storage){
  }
  ionViewWillEnter(){
    this.storage.get("user").then(user => {
      console.log(user);
      this.api.Deals.deals_list().then(deals =>{
        this.deals = deals
        this.hasData = true
        console.log(this.deals)
      })
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

  IonViewDidLoad() {

  }
  getBusiness(business){
    console.log(business)
    this.navCtrl.push(UserDealsPage, {business : business}, {
         animate: true,
         direction: 'forward'
    });
  }
}
