import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http }  from '@angular/http'

import { MenuPage } from '../page-menu/page-menu';

import * as $ from "jquery";
import { Storage } from '@ionic/storage';
import { ApiService } from '../../service/api.service.component';
import  moment  from 'moment';

import Config from '../../app/config';

@Component({
  selector: 'page-user-customers',
  templateUrl: 'page-user-customers.html'
})

export class UserCustomersPage {
  customersList: any;
  user : string[];
  hasData : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private storage: Storage,
    public api: ApiService,
    ) {
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  dateFormat(value) {
    var dateNow = moment(value),
      format = dateNow.format('MMM D YYYY at h:mm A'),
      newDateNow = new Date(value),
      getYear = newDateNow.getFullYear();

    format = format.replace("amt", "at");
    format = format.replace("pmt", "at");

    if (getYear == 1970) {
      return '-'
    } else {
      return format;
    }
  }

  toggleAccordion($event) {
    var thisElem = $($event.currentTarget).closest('.holder-accordion');

    $(thisElem).toggleClass('show').siblings('.holder-accordion').removeClass('show');
  }

  ionViewWillEnter() {
    this.storage.get('user').then(user =>{
      this.user = user;
      this.api.Users.user_list(user._id,user.permission,user.account_type).then(users => {
        this.customersList = users;
        this.hasData = true;
      })
    });
  }

}
