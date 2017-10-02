import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import Config from '../app/config';
import "rxjs/Rx"
@Injectable()
export class ApiService {
  constructor(private http :Http) { }

  Users = {
		user: (userId: string) => {
      return this.http.get(Config.baseUrl + "api/users/view/" + userId).map(response => {
          return response.json();
      }).toPromise();
    },
    user_list: (userId : string, permission : string, account_type : string) =>{
      return this.http.get(Config.baseUrl + "api/users/list2/" + userId + "/" + permission + "?account_type=" + account_type).map(response => {
        return response.json();
      }).toPromise();
    }
  }

  Business = {
		checker: (phone: string, userId: string, account_type: string) => {
      return this.http.post(Config.baseUrl + "api/business/check_phone/" + phone + "/" + userId + "?account_type=" + account_type, {}).map(response => {
        return response.json();
      }).toPromise();
    },
    register: (phone: string, userId: string, businessId: string,first_name : string, last_name : string) => {
      return this.http.post(Config.baseUrl + "api/business/send_sms/" + phone + "/" + userId + "/" + businessId, {first_name :first_name, last_name : last_name}).map(response => {
        return response.json();
      }).toPromise();
    }
  }

  Deals = {
    deals_list: (businessId: string) => {
      return this.http.get(Config.baseUrl + "api/deals/list/" + businessId +'/2').map(response => {
        return response.json();
      }).toPromise();
    }
  }
}
