import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as $ from "jquery";

import Config from '../../../app/config';

@Component({
  selector: 'page-category-menu',
  templateUrl: 'page-category-menu.html'
})

export class CategoryMenuPage {
  pages: Array<{title: string, component: any}>;

  constructor(
    public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop({
      animate: true,
      direction: 'back'
    });
  }
}
