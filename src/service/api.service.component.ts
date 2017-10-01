import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from '../app/config';
import "rxjs/Rx";

@Injectable()
export class ApiService {
  constructor(private http :Http) { }

  Users = {
		user: (userId: string) => {
          return this.http.get(Config.baseUrl + "api/users/view/" + userId).map(response => {
              return response.json();
          }).toPromise();
    }

  }
  Deals = {
		deals_list: () => {
          return this.http.get(Config.baseUrl + "api/deals/list/1/1").map(response => {
              return response.json();
          }).toPromise();
    }
  }


  LoyaltyCards = {
    loyaltyCard: (customerId) => {
      return this.http.get(Config.baseUrl + "api/loyalties/list/" + customerId).map(response => {
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


}
