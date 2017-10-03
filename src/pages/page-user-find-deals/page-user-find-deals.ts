import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { MenuPage } from '../page-menu/page-menu';
import { CategoryMenuPage } from '../page-menu/page-category-menu/page-category-menu';
import { SortMenuPage } from '../page-menu/page-sort-menu/page-sort-menu';
import { ApiService } from '../../service/api.service.component';
import { UserDealsPage } from '../page-user-deals/page-user-deals';
import { UserFindDealsMapPage } from '../page-user-find-deals-map/page-user-find-deals-map';

import * as $ from "jquery";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-user-find-deals',
  templateUrl: 'page-user-find-deals.html'
})

export class UserFindDealsPage {
  pages: Array<{title: string, component: any}>;
  deals : string[];
  hasData : boolean = false;
  user : any;
  favorites : string[];

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private api : ApiService,
    private storage : Storage)
    {
    }

  ionViewWillEnter(){
    this.getDealsAndFavorites();
  }

  IonViewDidLoad() {
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

  getDealsAndFavorites() {
    this.storage.get("user").then(user => {
      this.user = user;

      this.api.Deals.deals_list().then(deals =>{
        this.deals = deals;
        this.hasData = true;
        console.log(user._id)
        this.api.Favorites.favorite_list(user._id).then(favorites => {
          this.favorites = favorites;
          // console.log(favorites);
          if(this.hasData){
            this.favorites.forEach(favorite => {
              this.deals.forEach(deal =>{
                  if(deal._id === favorite.deals_id[0]._id){
                      deal.is_favorite = true;
                  }
              });
            });
          }
        });
      });
    });
  }

  getBusiness(business,template){
    this.navCtrl.push(UserDealsPage, {business : business,template:template}, {
         animate: true,
         direction: 'forward'
    });
  }

  goMapView() {
    this.navCtrl.setRoot(UserFindDealsMapPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  addToFavorites(deal) {

    let selectedButton = document.getElementById('addToFavorite' + deal._id);
    selectedButton.style.transition = "all 0s ease-in-out";
    selectedButton.className += " disabled";
    selectedButton.setAttribute("disabled", true);
    selectedButton.innerHTML = "";
    selectedButton.innerHTML = "Added to Favorites";

    let deal_body = {
      deals_id : deal._id,
      business_id : deal.business_id[0]._id,
      customer_id : this.user._id
    };

    this.api.Favorites.add_to_favorite(deal_body).then(favorite =>{
      console.log(favorite);
    })
    .catch(error => {
      console.log(error._body);
    });

  }




}
