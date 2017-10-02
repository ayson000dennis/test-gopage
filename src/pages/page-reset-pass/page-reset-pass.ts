import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { ResetPassSuccessPage } from '../page-reset-pass-success/page-reset-pass-success';

import { Http }  from '@angular/http';
import * as $ from "jquery";
import 'rxjs/add/operator/map';

import Config from '../../app/config';

@Component({
  selector: 'page-reset-pass',
  templateUrl: 'page-reset-pass.html'
})

export class ResetPassPage {
  posts: {email: string} = {
    email : ''
  }

  constructor(
    public navCtrl: NavController,
    public http : Http) {
  }

  goBack() {
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  resetMe() {
    var getUser = this.posts.email,
      baseUrl = Config.baseUrl;

    if (getUser) {
      this.http.post(baseUrl + 'api/users/sendemail',this.posts).subscribe(res => {
        console.log(res);
        this.navCtrl.setRoot(ResetPassSuccessPage, {}, {
          animate: true,
          direction: 'forward'
        });
      }, err => {
        $('.form-reset label').each(function() {
         var thisInput = $(this).find('input');

         thisInput.addClass('has-error').siblings('.text-validate').text('Invalid email address. Are you sure you are registered?');
        });
      });
    } else {
      $('.form-reset label').each(function() {
       var thisInput = $(this).find('input');

       thisInput.addClass('has-error').siblings('.text-validate').text('Email address is required.');
      });
    }
  }
}
