import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//database service
import { ApiService } from '../../../service/api.service.component';
import { UserFilteredDealsPage } from '../../page-user-filtered-deals/page-user-filtered-deals';

import * as $ from "jquery";

import Config from '../../../app/config';

@Component({
  selector: 'page-category-menu',
  templateUrl: 'page-category-menu.html'
})

export class CategoryMenuPage {
  pages: Array<{title: string, component: any}>;
    business_category : string[];
    business_filter_data: string[];
      hasData :boolean = false;

  constructor(
    public navCtrl: NavController,
    private api: ApiService
    ) {
  }

  ionViewWillEnter(){
      this.api.BusinessCategory.business_category().then(business_category =>{
            this.business_category = business_category;
            this.hasData = true;
      });
  }

  goFilterBusiness(business_name){
    // console.log(business_category);
    var business_category =  {
        'category': business_name,
        'sort' : '1'
    };
    var filtered = [];
    this.api.BusinessCategoryFilter.business_category_filter(business_category).then(business_filter =>{
          this.business_filter_data = business_filter;
          business_filter.forEach(filter =>{
              if(filter.business_id.length !==0){
                  filtered.push(filter)
              }
          })
          console.log('boom');

          this.navCtrl.push(UserFilteredDealsPage, { business_category: filtered }, {
            animate: true,
            direction: 'forward'
          });
    });
  }

  goBack() {
    this.navCtrl.pop({
      animate: true,
      direction: 'back'
    });
  }
}
