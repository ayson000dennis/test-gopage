import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from '../app/config';
import "rxjs/Rx";
import * as $ from "jquery";
@Injectable()
export class ApiService {
  constructor(
    private http :Http
    ) { }


  Users = {
		user: (userId: string) => {
          return this.http.get(Config.baseUrl + "api/users/view/" + userId).map(response => {
              return response.json();
          }).toPromise();
    }

  }

  Deals = {
		deals_list: () => {
          return this.http.get(Config.baseUrl + "api/deals/list_all/").map(response => {
              return response.json();
          }).toPromise();
    }
  }

  BusinessCategory = {
    business_category: () => {
        return this.http.get(Config.baseUrl + "api/business_category/list/").map(response =>{
            return response.json();
        }).toPromise();
    }

  }

  Loyalties = {
    loyalty_list: (customerId) => {
      return this.http.get(Config.baseUrl + "api/loyalties/list/" + customerId).map(response => {
        return response.json();
      }).toPromise();
    },

    loyalty_deal: (customerId, accountType) => {
      return this.http.get(Config.baseUrl + "api/deals/list/" + customerId + "/" + accountType).map(response => {
        return response.json();
      }).toPromise();
    }
  }
   LoyaltyCards = {
    loyalty_list: (customerId,businessId) => {
      return this.http.get(Config.baseUrl + "api/loyalties/list/" + customerId + "/" + businessId).map(response => {
        return response.json();
      }).toPromise();
    },
     business: (customerId) => {
      return this.http.get(Config.baseUrl + "api/loyalties/business/" + customerId).map(response => {
        return response.json();
      }).toPromise();
    }
  }

  LoyaltyDeals = {
    loyaltyDeal: (customerId, accountType) => {
      return this.http.get(Config.baseUrl + "api/deals/list/" + customerId + "/" + accountType).map(response => {
        return response.json();
      }).toPromise();
    }
  }

  Favorites = {
    add_to_favorite: (deal_body) => {
      return this.http.post(Config.baseUrl + "api/favorites/add", deal_body).map(response => {
        console.log(response);
        return response.json();
      }).toPromise();
    },

    favorite_list: (customer_id) => {
      return this.http.get(Config.baseUrl + "api/favorites/list/" + customer_id).map(response => {
        return response.json();
      }).toPromise();
    }
  }


  //Deals Business CategoryMenuPage
  BusinessCategoryFilter = {
    business_category_filter : (business_category) => {
        return this.http.get(Config.baseUrl + "api/business/filter?" + $.param(business_category)).map(response =>{
            return response.json();
        }).toPromise();
    }
  }



}
