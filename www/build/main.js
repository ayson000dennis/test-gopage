webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortMenuPage = (function () {
    function SortMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SortMenuPage.prototype.goBack = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    return SortMenuPage;
}());
SortMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sort-menu',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-sort-menu/page-sort-menu.html"*/'<ion-content padding class="content-sort-menu">\n  <p class="title">\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n  </p>\n\n  <ion-list>\n    <h5>Sort by</h5>\n    <ion-item>\n      <ion-label>Sort by Relevance</ion-label>\n      <ion-checkbox [(ngModel)]="relevance"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sort by Distance</ion-label>\n      <ion-checkbox [(ngModel)]="distance"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sort by Favorites</ion-label>\n      <ion-checkbox [(ngModel)]="favorites"></ion-checkbox>\n    </ion-item>\n\n    <div class="sortby-button">\n      <button class="btn cancel-btn" role="button" (click)="goBack()">Cancel</button>\n      <button class="btn done-btn" role="button" (click)="goBack()">Done</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-sort-menu/page-sort-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SortMenuPage);

//# sourceMappingURL=page-sort-menu.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_find_deals_page_user_find_deals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserDealsPage = (function () {
    function UserDealsPage(navCtrl, platform, navParams, api, storage) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.hasData = false;
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
    UserDealsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.business = this.navParams.get('business');
        this.template = this.navParams.get('template');
        var self = this;
        console.log(this.business);
        this.api.Deals.deals_list().then(function (deals) {
            _this.deals = deals;
            _this.hasData = true;
            // console.log(this.deals)
        });
        // console.log(this.business);
        if (this.business.operations[0] !== '2' && this.business.operations.length !== 0 && this.hasData == true) {
            // this.business.operations.forEach(function(val,key){
            //     console.log(val);
            //
            //   // self.operations[this.days[key]] = val;
            //
            //   // console.log(self.operations);
            //
            // })
            // this.business.push({sample_data:{}});
            this.business['sample_data'] = {};
            var sample_data = '';
            var length = this.business.operations.length;
            // this.business.operations.splice(4,1);
            for (var index_days = 0; index_days < this.business.operations.length; index_days++) {
                for (var x = 0; x < this.days.length; x++) {
                    if (Object.keys(this.business.operations[index_days]) == this.days[x]) {
                        // console.log(this.days[x]);
                        this.business.sample_data[this.days[x]] = this.business.operations[index_days][this.days[x]];
                    }
                }
            }
            console.log(this.business);
            // console.log(this.business.operations);
        }
        // this.operations = this.business;
        console.log(this.operations);
    };
    UserDealsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserDealsPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserDealsPage.prototype.goListView = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserDealsPage.prototype.showHours = function () {
        if (__WEBPACK_IMPORTED_MODULE_7_jquery__(".operations-list").hasClass("open")) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".operations-list").removeClass("open");
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".toggle-collapse").text("(show more)");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".operations-list").addClass("open");
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".toggle-collapse").text("(show less)");
        }
    };
    return UserDealsPage;
}());
UserDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-deals',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-deals/page-user-deals.html"*/'<ion-header>\n  <ion-navbar>\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="deals-page">\n  <div *ngIf="hasData">\n    <ion-slides>\n      <ion-slide>\n        <img src="{{business.files.url !== unknown ? business.files.url : \'assets/images/placeholder.jpg\'}}" alt="Deals photo">\n      </ion-slide>\n    </ion-slides>\n\n    <div class="row">\n      <div class="col-12">\n        <h4 class="deal-title">{{template}}</h4>\n      </div>\n\n      <!-- <div class="col-12">\n        <div class="media" *ngFor="let deal of deals">\n          <img src="{{deal.photo.url !== unknown ? deal.photo.url : \'assets/images/placeholder.jpg\'}}" alt="{{deal.template}}">\n          <div class="media-body">\n            <a href="#"><h5>{{deal.template}}</h5></a>\n          </div>\n        </div>\n      </div> -->\n\n      <div class="col-12 share-deal">\n        <p>Share this deal</p>\n        <ul class="social-list">\n          <li><a href="#"><i class="fa fa-facebook fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-twitter fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-envelope fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-pinterest fa-lg"></i></a></li>\n        </ul>\n      </div>\n\n      <div class="col-12 about-business">\n        <h5 class="about-title">About {{business.company_name}}</h5>\n        <p class="about-description">{{business.description}}</p>\n\n        <ul class="social-links list-unstyled">\n          <li>\n            <i class="fa fa-map-marker fa-2x"></i>\n            <span class="business-name">{{business.company_name}}</span> <br>\n            <span class="business-address"> {{business.state}}, {{business.country}}, {{business.zip_postal}} </span>\n          </li>\n          <li *ngIf="business.operations.length === 0">\n          </li>\n          <li *ngIf="business.operations[0] === \'2\'">\n            <i class="fa fa-clock-o fa-2x"></i>\n            Open 24 Hours\n          </li>\n          <li *ngIf="business.operations[0] !== \'2\' && business.operations.length !== 0 && hasData === true">\n            <i class="fa fa-clock-o fa-2x"></i>\n              Opening Hours\n              <a class="toggle-collapse" (click)="showHours()">(show more)</a>\n              <!-- *ngFor="let operations of business.operations; let i = index" -->\n              <ul class="list-unstyled operations-list">\n                 <!-- {{ business.sample_data.Monday.start }} -  {{ business.sample_data.Monday.end}}  -->\n                <li *ngIf="business.sample_data.Monday != null"><strong>Monday</strong> {{ business.sample_data.Monday.start }} -  {{ business.sample_data.Monday.end}}  </li>\n                <li *ngIf="business.sample_data.Tuesday != null"><strong>Tuesday</strong>  {{ business.sample_data.Tuesday.start }} -  {{ business.sample_data.Tuesday.end}}  </li>\n                <li *ngIf="business.sample_data.Wednesday != null"><strong>Wednesday</strong> {{ business.sample_data.Wednesday.start }} -  {{ business.sample_data.Wednesday.end}} </li>\n                <li *ngIf="business.sample_data.Thursday != null"><strong>Thursday</strong> {{ business.sample_data.Thursday.start }} -  {{ business.sample_data.Thursday.end}}</li>\n                <li *ngIf="business.sample_data.Friday != null"><strong>Friday</strong> {{ business.sample_data.Friday.start }} -  {{ business.sample_data.Friday.end}}</li>\n                <li *ngIf="business.sample_data.Saturday != null"><strong>Saturday</strong> {{ business.sample_data.Saturday.start }} -  {{ business.sample_data.Saturday.end}}</li>\n                <li *ngIf="business.sample_data.Sunday != null"><strong>Sunday</strong> {{ business.sample_data.Sunday.start }} -  {{ business.sample_data.Sunday.end}}</li>\n              </ul>\n          </li>\n          <li>\n            <i class="fa fa-phone fa-2x"></i>\n            {{business.phone_number}}\n          </li>\n          <li>\n            <i class="fa fa-globe fa-2x"></i>\n            {{business.company_website}}\n          </li>\n          <li>\n            <i class="fa fa-envelope fa-2x"></i>\n            {{business.business_email}}\n          </li>\n          <!-- <li>\n            <i class="fa fa-facebook fa-2x"></i>\n            GoPageApp\n          </li>\n          <li>\n            <i class="fa fa-twitter fa-2x"></i>\n            @gopageapp\n          </li>\n          <li>\n            <i class="fa fa-instagram fa-2x"></i>\n            @gopageco\n          </li> -->\n        </ul>\n      </div>\n\n      <div class="col-12 location-map">\n        <h5>Location</h5>\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.4096210792902!2d-123.1095483788257!3d49.27982224000646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77c545b8651d683a!2sT%26T+Supermarket!5e0!3m2!1sen!2sph!4v1505114924507" id="google-map" frameborder="0" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-deals/page-user-deals.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_api_service_component__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_api_service_component__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], UserDealsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-user-deals.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_signup_page_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SliderPage.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SliderPage.prototype.signIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SliderPage.prototype.onSlideNext = function (slider) {
        if (slider.isEnd()) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.btn-green').trigger('click');
        }
    };
    return SliderPage;
}());
SliderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slider',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-slider/page-slider.html"*/'<!-- <ion-header no-shadow>\n\n  <ion-navbar>\n\n    <button class="btn-green" (click)="signUp()">Get Started</button>\n\n    <button class="btn-green-out" (click)="signIn()">Sign In</button>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content no-bounce class="page-slider text-center">\n\n  <ion-slides pager="true" (ionSlideNextStart)="onSlideNext($event)">\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <!-- <p class="subtitle">\n\n        Helping members &amp; small<br> business win\n\n      </p> -->\n\n      <img class="slider-img main-image" src="assets/images/member-main-image.png" alt="">\n\n      <h3 class="main-title">Your Go To App for Local</h3>\n\n      <h3 class="main-title">Loyalty Deals &amp; Discounts</h3>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n\n\n      <img class="slider-img" src="assets/images/member-iphone-login.png" alt="">\n\n      <p class="subtitle">\n\n        With GoPage you are a preferred <br>customer and receive the best deals and <br> alerts from your favorite business.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-qrcode.png" alt="">\n\n      <p class="subtitle">\n\n        Get rewarded for your loyalty! Use your <br>loyalty punchcard and redeem your <br> loyalty rewards from your favorite local <br> businesses.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-map.png" alt="">\n\n      <p class="subtitle">\n\n        Your GoPage App finds the deals you are<br> looking for from registered GoPage <br>businesses.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-messages.png" alt="">\n\n      <p class="subtitle">\n\n        Your favorite businesses alert <br>you first about deals, discounts <br>or events so you never miss out!\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <button class="btn-slider btn-green" (click)="signUp()">Get Started</button>\n\n  <button class="btn-slider btn-green-out" (click)="signIn()">Sign In</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-slider/page-slider.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SliderPage);

//# sourceMappingURL=page-slider.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFindDealsMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_find_deals_page_user_find_deals__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserFindDealsMapPage = (function () {
    function UserFindDealsMapPage(navCtrl, platform, api) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.api = api;
        this.hasData = false;
    }
    UserFindDealsMapPage.prototype.ionViewWillEnter = function () {
    };
    UserFindDealsMapPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserFindDealsMapPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsMapPage.prototype.showCategoryMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__["a" /* CategoryMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsMapPage.prototype.showSortMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__["a" /* SortMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsMapPage.prototype.goListView = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return UserFindDealsMapPage;
}());
UserFindDealsMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-find-deals-map',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-find-deals-map/page-user-find-deals-map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="jumbotron search-banner">\n\n    <form class="form-inline form-search-deals text-center">\n\n      <input type="text" class="form-control" placeholder="Search GoPage Deals">\n\n      <label>\n\n        <span class="fa fa-map-marker"></span>\n\n        <input type="text" class="form-control" placeholder="Los Angeles, CA">\n\n      </label>\n\n      <button class="fa fa-search btn-search-deals" type="submit"></button>\n\n    </form>\n\n  </div>\n\n\n\n  <nav id="filter-sort-map" class="navbar navbar-light">\n\n    <ul class="nav nav-tabs">\n\n      <li class="nav-item">\n\n        <a class="nav-link filter-categories" (click)="showCategoryMenu()"><i class="fa fa-filter"></i> Categories</a>\n\n      </li>\n\n      <!-- <li class="nav-item">\n\n        <a class="nav-link filter-sort" (click)="showSortMenu()"><i class="fa fa-sort"></i> Sort</a>\n\n      </li> -->\n\n      <li class="nav-item">\n\n        <a class="nav-link" (click)="goListView()"><i class="fa fa-list"></i> Back to list</a>\n\n      </li>\n\n    </ul>\n\n  </nav>\n\n\n\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.4096210792902!2d-123.1095483788257!3d49.27982224000646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77c545b8651d683a!2sT%26T+Supermarket!5e0!3m2!1sen!2sph!4v1505114924507" id="google-map" frameborder="0" allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-find-deals-map/page-user-find-deals-map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */]])
], UserFindDealsMapPage);

//# sourceMappingURL=page-user-find-deals-map.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_user_chat_page_user_chat__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInboxPage = (function () {
    function UserInboxPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserInboxPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserInboxPage.prototype.viewMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_user_chat_page_user_chat__["a" /* UserChatPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    return UserInboxPage;
}());
UserInboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-user-inbox',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-inbox/page-user-inbox.html"*/'<ion-header>\n  <ion-navbar>\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <p class="title">\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n    Inbox Page\n  </p> -->\n\n    <ion-list id="inbox-list">\n      <ion-item>\n        <span class="name"> STARBUCKS </span>\n        <button id="btn-message" ion-button (click)="viewMessage()"> MESSAGE </button>\n\n      </ion-item>\n\n      <ion-item tappable>\n        <span class="name"> ANGEL\'S BURGER </span>\n\n        <span class="date-time"> 7:12am &nbsp;&nbsp; 11/29/17 </span>\n\n        <!-- <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon> -->\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget velit leo. Etiam a ipsum et elit maximus volutpat non quis leo. Morbi viverra auctor nibh egestas finibus. Maecenas egestas augue in posuere hendrerit. Cras posuere fermentum dui, nec posuere nisl facilisis ut. Duis aliquam, diam tristique faucibus venenatis, mi ante mollis elit, non pulvinar leo orci pharetra augue. Donec dignissim eu velit id imperdiet. Donec sit amet facilisis quam. Duis non risus sodales ante sollicitudin rhoncus et a nulla. </p>\n\n      </ion-item>\n\n      <ion-item tappable>\n        <span class="name-new"> MCDONALDS </span>\n\n        <span class="date-time-new"> 6:12am &nbsp;&nbsp; 10/29/17 </span>\n\n        <!-- <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon> -->\n        <p class="message-new">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget velit leo. Etiam a ipsum et elit maximus volutpat non quis leo. Morbi viverra auctor nibh egestas finibus. Maecenas egestas augue in posuere hendrerit. Cras posuere fermentum dui, nec posuere nisl facilisis ut. Duis aliquam, diam tristique faucibus venenatis, mi ante mollis elit, non pulvinar leo orci pharetra augue. Donec dignissim eu velit id imperdiet. Donec sit amet facilisis quam. Duis non risus sodales ante sollicitudin rhoncus et a nulla. </p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-inbox/page-user-inbox.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */]])
], UserInboxPage);

//# sourceMappingURL=page-user-inbox.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(291);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__(159);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__sql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_service__ = __webpack_require__(160);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__database_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model__ = __webpack_require__(750);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service__ = __webpack_require__(292);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_service__ = __webpack_require__(409);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__socket_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DB_NAME = '__mojoapp';
var win = window;
var Sql = (function () {
    function Sql(platform) {
        var _this = this;
        this.platform = platform;
        this._dbPromise = new Promise(function (resolve, reject) {
            try {
                var _db_1;
                _this.platform.ready().then(function () {
                    if (_this.platform.is('cordova') && win.sqlitePlugin) {
                        _db_1 = win.sqlitePlugin.openDatabase({
                            name: DB_NAME,
                            location: 'default'
                        });
                    }
                    else {
                        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
                        _db_1 = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
                    }
                    resolve(_db_1);
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
        this._tryInit();
    }
    // Initialize the DB with our required tables
    Sql.prototype._tryInit = function () {
        this.query('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)').catch(function (err) {
            console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
        });
    };
    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this._dbPromise.then(function (db) {
                    db.transaction(function (tx) {
                        tx.executeSql(query, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                    }, function (err) { return reject({ err: err }); });
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    /**
     * Get the value in the database identified by the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.get = function (key) {
        return this.query('select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    };
    /**
     * Set the value in the database for the given key. Existing values will be overwritten.
     * @param {string} key the key
     * @param {string} value The value (as a string)
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.set = function (key, value) {
        return this.query('insert or replace into kv(key, value) values (?, ?)', [key, value]);
    };
    Sql.prototype.getJson = function (key) {
        return this.get(key).then(function (value) {
            try {
                return JSON.parse(value);
            }
            catch (e) {
                throw e; // rethrowing exception so it can be handled with .catch()
            }
        });
    };
    Sql.prototype.setJson = function (key, value) {
        try {
            return this.set(key, JSON.stringify(value));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * Remove the value in the database for the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.remove = function (key) {
        return this.query('delete from kv where key = ?', [key]);
    };
    /**
     * Clear all keys/values of your database.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.clear = function () {
        return this.query('delete from kv');
    };
    return Sql;
}());
Sql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], Sql);

//# sourceMappingURL=sql.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseService = (function () {
    function DatabaseService(_db) {
        this._db = _db;
    }
    //
    // Shared getter setter
    //
    DatabaseService.prototype.set = function (key, value) {
        return this._db.set(key, value)
            .then(function () { return true; })
            .catch(function (err) {
            console.error('[Error] Saving ' + key + ' - ' + JSON.stringify(err));
            return false;
        });
    };
    DatabaseService.prototype.get = function (key) {
        return this._db.get(key)
            .then(function (value) {
            if (value) {
                return value;
            }
            else {
                throw new Error('Undefined value');
            }
        })
            .catch(function (err) {
            console.error('[Error] Getting ' + key + ' - ' + JSON.stringify(err));
            return null;
        });
    };
    DatabaseService.prototype.remove = function (key) {
        return this._db.remove(key)
            .then(function () { return true; })
            .catch(function (err) {
            console.error('[Error] Removing ' + key + ' - ' + JSON.stringify(err));
            return false;
        });
    };
    DatabaseService.prototype.getJson = function (key) {
        return this.get(key).then(function (value) {
            try {
                return JSON.parse(value);
            }
            catch (err) {
                console.error('Storage getJson(): unable to parse value for key', key, ' as JSON');
                return null;
            }
        });
    };
    DatabaseService.prototype.setJson = function (key, value) {
        try {
            return this.set(key, JSON.stringify(value));
        }
        catch (err) {
            return Promise.resolve(false);
        }
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sql__["a" /* Sql */]])
], DatabaseService);

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupMobilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_mobile_success_page_signup_mobile_success__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_email_page_signup_email__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SignupMobilePage = (function () {
    function SignupMobilePage(navCtrl, http, fb, gp, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.platform = platform;
        this.posts = {
            email: ' ',
            password: '',
            number: '',
            account_type: '1',
            status: '1',
            permission: '3'
        };
        platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('body').on('click', '.country-code, .country-dropdown-val', function () {
                console.log('1');
                __WEBPACK_IMPORTED_MODULE_10_jquery__(this).closest('.holder-country-code').toggleClass('showDropdown');
                if (__WEBPACK_IMPORTED_MODULE_10_jquery__(this).hasClass('country-dropdown-val')) {
                    var getImg = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('img').attr('src');
                    __WEBPACK_IMPORTED_MODULE_10_jquery__(this).parent('.country-dropdown').siblings('.country-code').find('img').attr('src', getImg);
                }
            });
        });
    }
    SignupMobilePage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupMobilePage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupMobilePage.prototype.goSignupEmail = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__page_signup_email_page_signup_email__["a" /* SignupEmailPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupMobilePage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', number: ' ', account_type: '1', status: '1', permission: '3' }).subscribe(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    SignupMobilePage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) {
            return console.log(res);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
            animate: true,
            direction: 'forward'
        })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    SignupMobilePage.prototype.signMeUp = function () {
        var getMobile = __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup').find('input[name="number"]'), getMobileVal = this.posts.number, mobileRegex = /^[0-9]{5,14}$/;
        if (getMobileVal) {
            getMobile.removeClass('has-error').next('.text-validate').text('');
            if (mobileRegex.test(getMobileVal)) {
                getMobileVal = '+1' + getMobileVal;
                __WEBPACK_IMPORTED_MODULE_10_jquery__["ajax"]({
                    url: '//warm-beach-10670.herokuapp.com/api/users/send_sms/' + getMobileVal,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        number: getMobileVal
                    },
                    beforeSend: function () {
                        getMobile.removeClass('has-error').next('.text-validate').text('');
                        __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup .btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                    }
                }).fail(function (err) {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup .btn-green[type="submit"]').find('.fa-spinner').remove();
                    console.log(err);
                }).done(function (res) {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup .btn-green[type="submit"]').find('.fa-spinner').remove();
                    var thisCode = res.number.code;
                    console.log(thisCode);
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form1').fadeOut('fast');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_10_jquery__('.form2').fadeIn('slow');
                    }, 250);
                });
            }
            else {
                getMobile.addClass('has-error').next('.text-validate').text('Mobile number is invalid.');
            }
        }
        else {
            getMobile.addClass('has-error').next('.text-validate').text('Please enter your mobile number.');
        }
    };
    SignupMobilePage.prototype.verifyMe = function () {
        var getCode = __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-verify').find('input'), getCodeVal = getCode.val();
        if (getCodeVal) {
            __WEBPACK_IMPORTED_MODULE_10_jquery__["ajax"]({
                url: '//warm-beach-10670.herokuapp.com/api/users/verify_sms/' + getCodeVal,
                type: 'POST',
                dataType: 'json',
                beforeSend: function () {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.holder-verify-phone input').removeClass('has-error').next('.text-validate').text('');
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-verify .btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                }
            }).fail(function (err) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-verify .btn-green[type="submit"]').find('.fa-spinner').remove();
                getCode.addClass('has-error').next('.text-validate').text('Verification Code is invalid.');
            }).done(function (res) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-verify .btn-green[type="submit"]').find('.fa-spinner').remove();
                console.log('Your mobile number has been verified.');
                getCode.removeClass('has-error').next('.text-validate').text('');
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form2').fadeOut('fast');
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form3').fadeIn('slow');
                }, 250);
            });
        }
        else {
            getCode.addClass('has-error').next('.text-validate').text('Please enter the verification code we sent on your mobile.');
        }
    };
    SignupMobilePage.prototype.createMyPass = function () {
        var getPass = __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password').find('input:first-child'), getPassVal = getPass.val(), getPassConfirm = __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password').find('input:nth-child(2)'), getPassConfirmVal = getPassConfirm.val(), thisPage = this;
        if (getPassVal && getPassConfirmVal) {
            if (getPassVal == getPassConfirmVal) {
                getPassConfirm.removeClass('has-error').next('.text-validate').text('');
                var numberVal = '+1' + this.posts.number;
                __WEBPACK_IMPORTED_MODULE_10_jquery__["ajax"]({
                    url: '//warm-beach-10670.herokuapp.com/api/users/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        number: numberVal,
                        password: getPassConfirmVal,
                        email: this.posts.email,
                        account_type: this.posts.account_type,
                        status: this.posts.status,
                        permission: this.posts.permission
                    },
                    beforeSend: function () {
                        console.log(numberVal);
                        __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password input').removeClass('has-error').next('.text-validate').text('');
                        __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password .btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                    }
                }).fail(function (err) {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password .btn-green[type="submit"]').find('.fa-spinner').remove();
                    console.log(err);
                }).done(function (res) {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password .btn-green[type="submit"]').find('.fa-spinner').remove();
                    thisPage.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__page_signup_mobile_success_page_signup_mobile_success__["a" /* SignupMobileSuccessPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password').find('input').addClass('has-error').siblings('.text-validate').text('Passwords do not match.');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-password').find('input').addClass('has-error').siblings('.text-validate').text('Please enter your desired password.');
        }
    };
    return SignupMobilePage;
}());
SignupMobilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-mobile',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-mobile/page-signup-mobile.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <div class="form1">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n    </p>\n\n    <p class="text-center subtitle">\n\n      Sign up with <a href="#" (click)="fbConnect()">Facebook</a>, <a href="#" (click)="gpConnect()">Google</a> or <a href="#" (click)="goSignupEmail()">email address</a>\n\n    </p>\n\n    <div class="divider">\n\n      <span>or</span>\n\n    </div>\n\n    <p class="description">Enter your mobile number</p>\n\n    <form class="form-signup">\n\n      <label>\n\n        <div class="holder-country-code">\n\n          <div class="country-code">\n\n            <img src="assets/images/icon-flag-us.jpg" alt=""/>\n\n            <span class="fa fa-caret-down"></span>\n\n          </div>\n\n          <ul class="country-dropdown">\n\n            <li class="country-dropdown-val">\n\n              <img src="assets/images/icon-flag-us.jpg" alt=""/><span class="country-name">U.S. </span><span class="country-area-code">(+1)</span>\n\n            </li>\n\n            <li class="country-dropdown-val">\n\n              <img src="assets/images/icon-flag-ca.jpg" alt=""/><span class="country-name">Canada </span><span class="country-area-code">(+1)</span>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n        <input type="number" name="number" placeholder="Mobile number" [(ngModel)]="posts.number"/>\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="signMeUp()">Sign Up</button>\n\n    </form>\n\n    <hr class="hr" />\n\n    <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n  </div>\n\n\n\n  <div class="form2">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n      Verify Your Mobile Number\n\n    </p>\n\n    <form class="form-verify">\n\n      <label>\n\n        <input type="text" placeholder="Verification Code">\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="verifyMe()">Verify</button>\n\n    </form>\n\n  </div>\n\n\n\n  <div class="form3">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n      Create a Password\n\n    </p>\n\n    <form class="form-password">\n\n      <label>\n\n        <input id="enter-password" class="input-mobile" type="password" placeholder="Enter password" />\n\n        <input id="confirm-password" class="input-mobile" type="password" placeholder="Confirm password" />\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="createMyPass()">Submit</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-mobile/page-signup-mobile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], SignupMobilePage);

//# sourceMappingURL=page-signup-mobile.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPassPage = (function () {
    function ResetPassPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.posts = {
            email: ''
        };
    }
    ResetPassPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    ResetPassPage.prototype.resetMe = function () {
        var _this = this;
        var getUser = this.posts.email, baseUrl = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* default */].baseUrl;
        if (__WEBPACK_IMPORTED_MODULE_5_jquery__('.btn-green[type="submit"]').find('.fa-spinner').length == 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
        }
        if (getUser) {
            this.http.post(baseUrl + 'api/users/sendemail', this.posts).subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */], {}, {
                    animate: true,
                    direction: 'forward'
                });
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.form-reset label').each(function () {
                    var thisInput = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).find('input'), thisPlaceholder = thisInput.attr('placeholder');
                    thisInput.addClass('has-error').siblings('.text-validate').text('Invalid ' + thisPlaceholder + '. Are you sure you are registered?');
                });
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.form-reset label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).find('input'), thisPlaceholder = thisInput.attr('placeholder');
                thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is required.');
            });
        }
    };
    return ResetPassPage;
}());
ResetPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-pass',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-reset-pass/page-reset-pass.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password\n\n  </p>\n\n  <form class="form-reset">\n\n    <label><input type="email" name="email" placeholder="Email or Mobile number" [(ngModel)]="posts.email" /><span class="text-validate">Email address is required.</span></label>\n\n    <button class="btn-green" type="submit" (click)="resetMe()">Send</button>\n\n  </form>\n\n  <p class="description text-center">Enter the email address or mobile number associated with your account, and we’ll email or text your new random generated password.<p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-reset-pass/page-reset-pass.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], ResetPassPage);

//# sourceMappingURL=page-reset-pass.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoyaltyCardDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service_component__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PageUserLoyaltyCardDealsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserLoyaltyCardDealsPage = (function () {
    function UserLoyaltyCardDealsPage(navCtrl, navParams, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
    }
    UserLoyaltyCardDealsPage.prototype.ionViewDidLoad = function () {
    };
    UserLoyaltyCardDealsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.business_id = this.navParams.get('business_id');
        this.storage.get('user').then(function (user) {
            _this.api.LoyaltyCards.loyalty_list(user._id, _this.business_id).then(function (deal) {
                _this.deals = deal;
                console.log(deal);
            });
        });
    };
    UserLoyaltyCardDealsPage.prototype.backToLoyaltyCards = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    return UserLoyaltyCardDealsPage;
}());
UserLoyaltyCardDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-page-user-loyalty-card-deals',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.html"*/'<!--\n\n  Generated template for the PageUserLoyaltyCardDealsPage page.\n\n \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <div class="back-btn-holder" tappable (click)="backToLoyaltyCards()">\n\n    <ion-icon ios="ios-arrow-back"></ion-icon>\n\n    <p>Back to Loyalty Cards</p>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="card-deals-holder">\n\n    <div class="card-deal" *ngFor="let deal of deals;">\n\n      <div class="img-holder">\n\n        <img [src]="deal.photo.url" alt="">\n\n      </div>\n\n      <div class="text-holder">\n\n        <h3 class="deal-title-text">{{deal.title}}</h3>\n\n        <span class="card-stamp-text">{{deal.stamp}} of {{deal.buy_pcs}}</span>\n\n        <span class="card-expiration-text">Expires {{deal.end_date | date : \'MM/dd/yyyy\'}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserLoyaltyCardDealsPage);

//# sourceMappingURL=page-user-loyalty-card-deals.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_reset_pass_page_reset_pass__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginPage = (function () {
    function LoginPage(navCtrl, http, fb, gp, storage, api) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.storage = storage;
        this.api = api;
        this.posts = {
            username: '',
            password: ''
        };
    }
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    LoginPage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', permission: '4' }).subscribe(function (res) {
                    _this.getUser(res.json());
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    LoginPage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    LoginPage.prototype.goReset = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_reset_pass_page_reset_pass__["a" /* ResetPassPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage.prototype.logMeIn = function () {
        var _this = this;
        var getUser = this.posts.username, getPass = this.posts.password, baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        if (__WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').length == 0) {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
        }
        if (getUser && getPass) {
            this.http.post(baseUrl + 'api/users/login', this.posts).subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                _this.getUser(res.json());
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-login label').each(function () {
                    var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder');
                    if (thisInputName == 'username') {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Invalid ' + thisPlaceholder);
                    }
                    else if (thisInputName == 'password') {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Invalid Password.');
                    }
                });
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-login label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder');
                if (thisInputName == 'username') {
                    if (getUser) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is required.');
                    }
                }
                else {
                    if (getPass) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Password is required .');
                    }
                }
            });
        }
    };
    LoginPage.prototype.getUser = function (token) {
        var _this = this;
        this.api.Users.user(token.user_id).then(function (user) {
            _this.storage.set('user', user);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
                animate: true,
                direction: 'forward'
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-login/page-login.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card>\n\n\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goSignup()">\n\n    Welcome Back\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <form class="form-login">\n\n    <label><input type="email" name="username" placeholder="Email or Phone" [(ngModel)]="posts.username" /><span class="text-validate">Email address is required.</span></label>\n\n    <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /><span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span></label>\n\n    <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n  </form>\n\n  <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  <hr class="hr" />\n\n  <p class="description">Don\'t have an account? <a href="#" (click)="goSignup()">Sign Up</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-login/page-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__["a" /* ApiService */]])
], LoginPage);

//# sourceMappingURL=page-login.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.module": [
		800,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        var _this = this;
        this.http = http;
        this.Users = {
            user: function (userId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/view/" + userId).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Deals = {
            deals_list: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/deals/list_all/").map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.BusinessCategory = {
            business_category: function () {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/business_category/list/").map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Loyalties = {
            loyalty_list: function (customerId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/list/" + customerId).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            loyalty_deal: function (customerId, accountType) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/deals/list/" + customerId + "/" + accountType).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.LoyaltyCards = {
            loyalty_list: function (customerId, businessId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/list/" + customerId + "/" + businessId).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            business: function (customerId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/business/" + customerId).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.LoyaltyDeals = {
            loyaltyDeal: function (customerId, accountType) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/deals/list/" + customerId + "/" + accountType).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Favorites = {
            add_to_favorite: function (deal_body) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/favorites/add", deal_body).map(function (response) {
                    console.log(response);
                    return response.json();
                }).toPromise();
            },
            favorite_list: function (customer_id) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/favorites/list/" + customer_id).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        //Deals Business CategoryMenuPage
        this.BusinessCategoryFilter = {
            business_category_filter: function (business_category) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/business/filter?" + __WEBPACK_IMPORTED_MODULE_4_jquery__["param"](business_category)).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
    }
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoyaltyCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_loyalty_card_deals_page_user_loyalty_card_deals__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoyaltyCardsPage = (function () {
    function UserLoyaltyCardsPage(navCtrl, api, storage) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.hasData = false;
    }
    UserLoyaltyCardsPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserLoyaltyCardsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            // console.log(user)
            _this.api.LoyaltyCards.business(user._id).then(function (loyalty) {
                console.log(loyalty);
                _this.loyalties = loyalty;
                _this.hasData = true;
                // console.log(loyalty[0].busines)
            });
        });
    };
    UserLoyaltyCardsPage.prototype.showCardDeals = function (business_id) {
        console.log(business_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_user_loyalty_card_deals_page_user_loyalty_card_deals__["a" /* UserLoyaltyCardDealsPage */], { business_id: business_id }, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserLoyaltyCardsPage;
}());
UserLoyaltyCardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-loyalty-cards',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-loyalty-cards/page-user-loyalty-cards.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="title-holder">\n\n    <p class="title">\n\n      Loyalty Cards\n\n    </p>\n\n  </div>\n\n\n\n  <div class="business-cards-holder" *ngIf="hasData">\n\n    <div class="business-cards" *ngFor="let loyalty of loyalties; let i = index;" tappable (click)="showCardDeals(loyalty.business_id[0]._id)"> \n\n      <div class="img-holder">\n\n        <img [src]="loyalty.deals_id[0].photo.url" alt="">\n\n      </div>\n\n      <div class="text-holder">\n\n        <h3 class="card-title-text">{{loyalty.business_id[0].company_name}}</h3>\n\n        <span class="card-location-text">{{loyalty.business_id[0].country}}</span>\n\n        <span class="card-count-text">{{loyalty.loyalties_row}} loyalty cards</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-loyalty-cards/page-user-loyalty-cards.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], UserLoyaltyCardsPage);

//# sourceMappingURL=page-user-loyalty-cards.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFilteredDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_user_find_deals_map_page_user_find_deals_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserFilteredDealsPage = (function () {
    // hasData :boolean = false
    function UserFilteredDealsPage(navCtrl, navParams, platform, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.api = api;
        this.storage = storage;
    }
    UserFilteredDealsPage.prototype.ionViewWillEnter = function () {
        // this.hasData = true;
        this.filtered_business = this.navParams.get('business_category');
        console.log(this.filtered_business);
    };
    UserFilteredDealsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserFilteredDealsPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFilteredDealsPage.prototype.showCategoryMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__["a" /* CategoryMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFilteredDealsPage.prototype.showSortMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__["a" /* SortMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFilteredDealsPage.prototype.goMapView = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__page_user_find_deals_map_page_user_find_deals_map__["a" /* UserFindDealsMapPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserFilteredDealsPage.prototype.IonViewDidLoad = function () {
    };
    UserFilteredDealsPage.prototype.getBusiness = function (business) {
        console.log(business);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business: business }, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserFilteredDealsPage;
}());
UserFilteredDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-filtered-deals',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-filtered-deals/page-user-filtered-deals.html"*/'<ion-header>\n  <ion-navbar>\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="jumbotron search-banner">\n    <form class="form-inline form-search-deals text-center">\n      <input type="text" class="form-control" placeholder="Search GoPage Deals">\n      <label>\n        <span class="fa fa-map-marker"></span>\n        <input type="text" class="form-control" placeholder="Los Angeles, CA">\n      </label>\n      <button class="fa fa-search btn-search-deals" type="submit"></button>\n    </form>\n  </div>\n\n  <nav id="filter-sort-map" class="navbar navbar-light">\n    <ul class="nav nav-tabs">\n      <li class="nav-item">\n        <a class="nav-link filter-categories" (click)="showCategoryMenu()"><i class="fa fa-filter"></i> Categories</a>\n      </li>\n      <!-- <li class="nav-item">\n        <a class="nav-link filter-sort" (click)="showSortMenu()"><i class="fa fa-sort"></i> Sort</a>\n      </li> -->\n      <li class="nav-item">\n        <a class="nav-link" (click)="goMapView()"><i class="fa fa-map-marker"></i> Map view</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div class="categories-header">\n    <div class="row">\n      <div class="col">\n        <p class="deals-counter">\n          <span class="deals-found">72</span> out of <span class="deals-total">262</span> deals\n        </p>\n        <ion-item>\n          <ion-label> Show Image</ion-label>\n          <ion-toggle [(ngModel)]="toggleImage"></ion-toggle>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n\n  <div class="categories-main">\n    <div class="row">\n      <div class="col-12 col-sm-9 holder-categories-result1">\n        <div class="row">\n          <!-- *ngIf="hasData" -->\n          <div class="col categories-result">\n            <div class="deal media {{toggleImage ? \'toggled\' : \'\'}}" *ngFor="let business of filtered_business">\n              <div class="col-xs-8">\n                <a class="deal-thumbnail" href="" *ngIf="toggleImage">\n                  <img class="d-flex mr-3" src="{{deal.photo.url !== unknown ? deal.photo.url : \'assets/images/placeholder.jpg\'}}" alt="{{deal.template}}">\n                </a>\n                <div class="media-body align-self-center">\n                  <a class="deal-title" href="">\n                    <h6 class="mt-0">{{ business.template }}</h6>\n                  </a>\n                  <a class="business-link" href="">{{ business.business_name }}</a>\n                  <p class="business-address">{{ business.business_id[0].country}}, {{business.business_id[0].state}}</p>\n                  <p class="expiration-date"><i class="fa fa-clock-o fa-lg"></i> Expires {{business.end_date | date: \'MM/dd/yyyy\'}}</p>\n                </div>\n              </div>\n              <div class="col-xs-4">\n                <div class="deals-button">\n                  <a class="btn btn-claim" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Add to Favorites <i class="fa fa-chevron-right"></i></a> <br class="btn-break">\n                  <a class="btn btn-more" (click)="getBusiness(business.business_id[0])">More deals <i class="fa fa-chevron-right"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <nav class="col-12 holder-pagination">\n      <ul class="pagination list-unstyled">\n        <li class="page-item prev-page">\n          <button class="page-link prev-page" ion-button small><i class="fa fa-angle-left"></i>&nbsp;<span class="prev">Prev</span></button>\n        </li>\n        <li class="page-item"><button class="page-link" ion-button small>1</button></li>\n        <li class="page-item"><button class="page-link" ion-button small>2</button></li>\n        <li class="page-item"><button class="page-link" ion-button small>3</button></li>\n        <li class="page-item"><button class="page-link active" ion-button small>4</button></li>\n        <li class="page-item">\n          <button class="page-link next-page" ion-button small><span class="next">Next</span>&nbsp;<i class="fa fa-angle-right"></i></button>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-filtered-deals/page-user-filtered-deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
], UserFilteredDealsPage);

//# sourceMappingURL=page-user-filtered-deals.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFavoritesPage = (function () {
    function UserFavoritesPage(navCtrl, navParams, platform, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.api = api;
        this.storage = storage;
    }
    UserFavoritesPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserFavoritesPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFavoritesPage.prototype.ionViewWillEnter = function () {
        this.getFavorites();
    };
    UserFavoritesPage.prototype.getFavorites = function () {
        var _this = this;
        this.storage.get("user").then(function (user) {
            _this.api.Favorites.favorite_list(user._id).then(function (favorites) {
                _this.favorites = favorites;
                console.log(favorites);
            });
        });
    };
    UserFavoritesPage.prototype.getBusiness = function (business) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business: business }, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserFavoritesPage;
}());
UserFavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-favorites',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-favorites/page-user-favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="favorites-holder">\n\n    <div class="favorites" *ngFor="let favorite of favorites;" tappable (click)="getBusiness(favorite.business_id[0])">\n\n      <div class="img-holder">\n\n        <img [src]="favorite.deals_id[0].photo.url" alt="">\n\n      </div>\n\n      <div class="text-holder">\n\n        <h3 class="title-text">{{favorite.deals_id[0].title}}</h3>\n\n        <div class="company-text">{{favorite.deals_id[0].business_name}}</div>\n\n        <div class="location-text">{{favorite.business_id[0].country}}</div>\n\n        <div class="expiration-text"><i class="fa fa-clock-o"></i> Expires {{favorite.deals_id[0].end_date | date : \'MM/dd/yyyy\'}}</div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-favorites/page-user-favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], UserFavoritesPage);

//# sourceMappingURL=page-user-favorites.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//chat


var UserChatPage = (function () {
    function UserChatPage(navCtrl, _zone, databaseService, socketService) {
        this.navCtrl = navCtrl;
        this._zone = _zone;
        this.databaseService = databaseService;
        this.socketService = socketService;
        this.btnEmitter = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* EventEmitter */]();
        this.messages = [];
        this.chatBox = "";
        this.init();
    }
    UserChatPage.prototype.ionViewWillEnter = function () {
        // Get all messages from database
        // this.databaseService.getJson("messages")
        //   .then(messages => {
        //     if (messages) {
        //       this.messages = this.messages.concat(_.sortBy(messages, ['epoch']));
        //     }
        //     this.scrollToBottom();
        //   });
        this.socketService.connect();
    };
    UserChatPage.prototype.ionViewWillLeave = function () {
        this.socketService.disconnect();
    };
    UserChatPage.prototype.init = function () {
        var _this = this;
        this.socketService.messages.subscribe(function (chatMessage) {
            _this._zone.run(function () {
                _this.messages.push(chatMessage);
            });
            _this.scrollToBottom();
        });
    };
    UserChatPage.prototype.sendMessage = function () {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        var message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    };
    UserChatPage.prototype.send = function (message) {
        //todo read email from database
        var from = "van@member.ph";
        var user_type = "member";
        this.socketService.newRequest(__WEBPACK_IMPORTED_MODULE_3__providers__["e" /* UtilService */].formatMessageRequest(message, from, user_type));
        this.chatBox = '';
        this.scrollToBottom();
        // console.log(message);
    };
    UserChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            });
        });
    };
    UserChatPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    return UserChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('txtChat'),
    __metadata("design:type", Object)
], UserChatPage.prototype, "txtChat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], UserChatPage.prototype, "content", void 0);
UserChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-user-chat',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-chat/page-user-chat.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <img class="header-logo" src="assets/images/logo-min.png" alt="">\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a> -->\n    <span class=\'title\'>{{ \'STARBUCKS\' }}</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="messages" #content>\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let msg of messages">\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border class="chatPageFooter" [keyboardAttach]="content" [btnClicked]="btnEmitter">\n  <ion-toolbar>\n\n    <ion-item no-lines>\n      <ion-label style="margin:0px;"></ion-label>\n      <div item-content style="width:100%;">\n        <elastic-textarea #txtChat placeholder="Send a message" lineHeight="20" maxExpand="5"></elastic-textarea>\n      </div>\n    </ion-item>\n\n    <ion-buttons right style="margin-left:10px">\n      <button ion-button icon-only\n              [disabled]="txtChat.content.trim().length<1"\n              (click)="sendMessage()">\n              SEND\n        <!-- <ion-icon name="md-send"></ion-icon> -->\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-chat/page-user-chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* DatabaseService */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* SocketService */]])
], UserChatPage);

//# sourceMappingURL=page-user-chat.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOCKET_HOST; });
var SOCKET_HOST = "http://localhost:8001";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = (function () {
    function UtilService() {
    }
    UtilService.getEpoch = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix();
    };
    UtilService.getCalendarDay = function (epoch) {
        if (!epoch) {
            return null;
        }
        var timeString = 'h:mm A';
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(epoch * 1000).calendar(null, {
            sameDay: '[Today] ' + timeString,
            lastDay: '[Yesterday] ' + timeString,
            sameElse: 'MM/DD ' + timeString
        });
    };
    UtilService.formatMessageRequest = function (message, from, user_type) {
        return {
            type: 'message_by_member',
            from: from,
            message: message,
            user_type: user_type
        };
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_loyalty_cards_page_user_loyalty_cards__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_find_deals_page_user_find_deals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_user_favorites_page_user_favorites__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_inbox_page_user_inbox__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [
            { title: 'membership card', component: __WEBPACK_IMPORTED_MODULE_3__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */] },
            { title: 'loyalty cards', component: __WEBPACK_IMPORTED_MODULE_4__page_user_loyalty_cards_page_user_loyalty_cards__["a" /* UserLoyaltyCardsPage */] },
            { title: 'find deals', component: __WEBPACK_IMPORTED_MODULE_5__page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */] },
            { title: 'favorites', component: __WEBPACK_IMPORTED_MODULE_6__page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */] },
            { title: 'inbox', component: __WEBPACK_IMPORTED_MODULE_7__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */] }
        ];
    }
    MenuPage.prototype.goBack = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    MenuPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component, {}, {
            animate: true,
            direction: 'back'
        });
    };
    MenuPage.prototype.logOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-menu.html"*/'<ion-content padding class="content-page-menu">\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <ion-list class="menu-list">\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <hr class="divider">\n\n  <a class="logout" href="#" (click)="logOut()">Logout</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MenuPage);

//# sourceMappingURL=page-menu.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SocketService = (function () {
    function SocketService(databaseService) {
        var _this = this;
        this.databaseService = databaseService;
        this.messages = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socketObserver = observer;
        });
        this.init();
    }
    SocketService.prototype.init = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SOCKET_HOST */], { autoConnect: true });
        this.socket.on("connect", function () {
            console.debug('***Socket Connected***');
        });
        this.socket.on("reconnecting", function (attempt) {
            console.debug('***Socket Reconnecting***', attempt);
        });
        this.socket.on("reconnect_failed", function () {
            console.debug('***Socket Reconnect failed***');
        });
        this.socket.on('disconnect', function () {
            console.debug('***Socket Disconnected***');
        });
        // Get Message Response
        this.socket.on('message_by_business', function (response) {
            var chatMessage = response;
            if (typeof response === 'string') {
                chatMessage = {
                    type: 'message_by_business',
                    from: chatMessage.from,
                    message: chatMessage.message,
                    user_type: chatMessage.user_type
                };
            }
            // console.log(chatMessage);
            chatMessage.epoch = __WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* UtilService */].getEpoch();
            _this.socketObserver.next(chatMessage);
            // this.databaseService.getJson("messages")
            //   .then(messages => {
            //     if (messages === null) {
            //       messages = [];
            //     }
            //     messages.push(chatMessage);
            //     return this.databaseService.setJson("messages", messages);
            //   })
            //   .then(success => {
            //     if (success) {
            //       this.socketObserver.next(chatMessage);
            //     }
            //   });
        });
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.connect = function () {
        this.socket.connect();
    };
    SocketService.prototype.newRequest = function (chatMessage) {
        // Send message
        chatMessage.epoch = __WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* UtilService */].getEpoch();
        this.socketObserver.next(chatMessage);
        this.socket.emit('message_send', chatMessage);
        // chatMessage.epoch = UtilService.getEpoch();
        // this.databaseService.getJson("messages")
        //   .then(messages => {
        //     if (!messages) {
        //       messages = [];
        //     }
        //     messages.push(chatMessage);
        //     return this.databaseService.setJson("messages", messages);
        //   })
        //   .then(success => {
        //     if (success) {
        //       this.socketObserver.next(chatMessage);
        //       this.socket.emit(MessageType.MSG_REQ, chatMessage);
        //     }
        //   });
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__database_service__["a" /* DatabaseService */]])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_page_login__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupSuccessPage = (function () {
    function SignupSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupSuccessPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__["a" /* SignupEmailPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupSuccessPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    return SignupSuccessPage;
}());
SignupSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-success',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-success/page-signup-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Sign Up Success\n\n  </p>\n\n  <p class="description text-center">We’ve just emailed you a link. <br>Please check your inbox and confirm your email<p>\n\n  <a class="btn btn-green text-center" (click)="goLogin()">Okay</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-success/page-signup-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SignupSuccessPage);

//# sourceMappingURL=page-signup-success.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupMobileSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_page_login__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupMobileSuccessPage = (function () {
    function SignupMobileSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupMobileSuccessPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__["a" /* SignupEmailPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupMobileSuccessPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    return SignupMobileSuccessPage;
}());
SignupMobileSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-mobile-success',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-mobile-success/page-signup-mobile-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Sign Up Success\n\n  </p>\n\n  <p class="description text-center">You have successfully registered. <br>You can now log-in.<p>\n\n  <a class="btn btn-green text-center" (click)="goLogin()">Okay</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-mobile-success/page-signup-mobile-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SignupMobileSuccessPage);

//# sourceMappingURL=page-signup-mobile-success.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_reset_pass_page_reset_pass__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_page_login__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPassSuccessPage = (function () {
    function ResetPassSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResetPassSuccessPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_reset_pass_page_reset_pass__["a" /* ResetPassPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    ResetPassSuccessPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return ResetPassSuccessPage;
}());
ResetPassSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-pass-success',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-reset-pass-success/page-reset-pass-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password Success\n\n  </p>\n\n  <p class="description text-center">You should receive an email/text from us shortly. <br>We’ll meet you back here.<p>\n\n  <a class="btn btn-green text-center" (click)="goHome()">Back to Login</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-reset-pass-success/page-reset-pass-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ResetPassSuccessPage);

//# sourceMappingURL=page-reset-pass-success.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-details',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/item-details/item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/item-details/item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_email_page_signup_email__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_page_signup_mobile_page_signup_mobile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_page_signup_success_page_signup_success__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_page_signup_mobile_success_page_signup_mobile_success__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_menu_page_category_menu_page_category_menu__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_item_details_item_details__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_page_user_loyalty_cards_page_user_loyalty_cards__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_page_user_filtered_deals_page_user_filtered_deals__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_page_user_find_deals_map_page_user_find_deals_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_page_user_favorites_page_user_favorites__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_page_user_loyalty_card_deals_page_user_loyalty_card_deals__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_page_user_inbox_page_user_inbox__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_page_user_deals_page_user_deals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_list_list__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_screen_orientation__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_qrcode2__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_barcode_scanner__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_page_user_chat_page_user_chat__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_elasticTextarea__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_chatBubble__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__directives__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_email_page_signup_email__["a" /* SignupEmailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_page_signup_mobile_page_signup_mobile__["a" /* SignupMobilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_page_signup_success_page_signup_success__["a" /* SignupSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_page_signup_mobile_success_page_signup_mobile_success__["a" /* SignupMobileSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_page_menu_page_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_menu_page_category_menu_page_category_menu__["a" /* CategoryMenuPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_page_menu_page_sort_menu_page_sort_menu__["a" /* SortMenuPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_page_user_loyalty_cards_page_user_loyalty_cards__["a" /* UserLoyaltyCardsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_filtered_deals_page_user_filtered_deals__["a" /* UserFilteredDealsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_find_deals_map_page_user_find_deals_map__["a" /* UserFindDealsMapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_user_loyalty_card_deals_page_user_loyalty_card_deals__["a" /* UserLoyaltyCardDealsPage */],
            __WEBPACK_IMPORTED_MODULE_39__components_elasticTextarea__["a" /* ElasticTextarea */],
            __WEBPACK_IMPORTED_MODULE_40__components_chatBubble__["a" /* ChatBubble */],
            __WEBPACK_IMPORTED_MODULE_41__directives__["a" /* KeyboardAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_37__pages_page_user_chat_page_user_chat__["a" /* UserChatPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.module#UserLoyaltyCardDealsPageModule', name: 'UserLoyaltyCardDealsPage', segment: 'page-user-loyalty-card-deals', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_33_ngx_qrcode2__["a" /* NgxQRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_email_page_signup_email__["a" /* SignupEmailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_page_signup_mobile_page_signup_mobile__["a" /* SignupMobilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_page_signup_success_page_signup_success__["a" /* SignupSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_page_signup_mobile_success_page_signup_mobile_success__["a" /* SignupMobileSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_page_menu_page_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_menu_page_category_menu_page_category_menu__["a" /* CategoryMenuPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_page_menu_page_sort_menu_page_sort_menu__["a" /* SortMenuPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_page_user_loyalty_cards_page_user_loyalty_cards__["a" /* UserLoyaltyCardsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_filtered_deals_page_user_filtered_deals__["a" /* UserFilteredDealsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_find_deals_map_page_user_find_deals_map__["a" /* UserFindDealsMapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_user_loyalty_card_deals_page_user_loyalty_card_deals__["a" /* UserLoyaltyCardDealsPage */],
            __WEBPACK_IMPORTED_MODULE_39__components_elasticTextarea__["a" /* ElasticTextarea */],
            __WEBPACK_IMPORTED_MODULE_40__components_chatBubble__["a" /* ChatBubble */],
            __WEBPACK_IMPORTED_MODULE_37__pages_page_user_chat_page_user_chat__["a" /* UserChatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_35__service_api_service_component__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_38__providers__["d" /* Sql */],
            __WEBPACK_IMPORTED_MODULE_38__providers__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_38__providers__["c" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_38__providers__["e" /* UtilService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    baseUrl: 'https://warm-beach-10670.herokuapp.com/'
    // baseUrl : 'http://localhost:5015/'
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMembershipCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_inbox_page_user_inbox__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserMembershipCardPage = (function () {
    function UserMembershipCardPage(navCtrl, navParams, platform, barcodeScanner, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.barcodeScanner = barcodeScanner;
        this.api = api;
        this.storage = storage;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.hasData = false;
    }
    UserMembershipCardPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserMembershipCardPage.prototype.viewInbox = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserMembershipCardPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserMembershipCardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.user = user;
            console.log(user);
            var makeQr = {
                MembershipNumber: user.membership_number,
                Name: user.first_name + ' ' + user.last_name,
                MemberSince: user.created_at,
            };
            _this.createdCode = JSON.stringify(makeQr);
            _this.hasData = true;
        });
    };
    UserMembershipCardPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    return UserMembershipCardPage;
}());
UserMembershipCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-membership-card',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-membership-card/page-user-membership-card.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox" (click)="viewInbox()"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="holder-qrcode" *ngIf="hasData" >\n\n    <p class="member-name">{{user.first_name}} {{user.last_name}}</p>\n\n    <ion-card *ngIf="createdCode">\n\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n    </ion-card>\n\n    <p class="qrcode-id">{{user.membership_number}}</p>\n\n  </div>\n\n</ion-content>\n\n\n\n<!-- <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button> -->\n\n  <!-- <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button> -->\n\n <!--  <ion-item>\n\n\n\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n\n    </ion-input>\n\n  </ion-item>\n\n -->\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-membership-card/page-user-membership-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], UserMembershipCardPage);

//# sourceMappingURL=page-user-membership-card.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_page_slider_page_slider__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_sql__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_socket_service__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, screenOrientation, keyboard) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.screenOrientation = screenOrientation;
        this.keyboard = keyboard;
        // make SliderPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_page_slider_page_slider__["a" /* SliderPage */];
        platform.ready().then(function () {
            _this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
        });
        this.initializeApp();
        // set our app's pages
        // this.pages = [
        //   { title: 'LOYALTY', component: UserMembershipCardPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('nav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/app/app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n\n\n\n<!-- <ion-menu [content]="nav">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu> -->\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_7__providers_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_8__providers_sql__["a" /* Sql */], __WEBPACK_IMPORTED_MODULE_9__providers_socket_service__["a" /* SocketService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_slider_page_slider__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_email_page_signup_email__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SignupPage = (function () {
    function SignupPage(navCtrl, http, fb, gp) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.posts = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            number: ' ',
            account_type: '1',
            status: '1',
            permission: '3'
        };
    }
    SignupPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_slider_page_slider__["a" /* SliderPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupPage.prototype.goSignupEmail = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__page_signup_email_page_signup_email__["a" /* SignupEmailPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupPage.prototype.goSignupMobile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__["a" /* SignupMobilePage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupPage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', number: ' ', account_type: '1', status: '1', permission: '3' }).subscribe(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    SignupPage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) {
            return console.log(res);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
            animate: true,
            direction: 'forward'
        })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup/page-signup.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">Sign Up\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <button class="btn btn-green" (click)="goSignupEmail()"><span class="fa fa-envelope-o"></span> Sign Up with Email</button>\n\n  <button class="btn btn-green" (click)="goSignupMobile()"><span class="fa fa-mobile"></span> Sign Up with Mobile number</button>\n\n\n\n  <!-- <form class="form-signup">\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate">First name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate">Last name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" />\n\n      <span class="text-validate">Email address is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" />\n\n      <span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span>\n\n    </label>\n\n    <input class="btn-green" type="submit" value="Sign Up" (click)="signMeUp()" />\n\n  </form> -->\n\n  <!-- <p class="description">By signing up, you agree to GoPage\'s <br><a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></p> -->\n\n  <hr class="hr" />\n\n  <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup/page-signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignupPage);

//# sourceMappingURL=page-signup.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
var MessageType = (function () {
    function MessageType() {
    }
    return MessageType;
}());

MessageType.MSG_REQ = "message_request";
MessageType.MSG_RES = "message_response";
//# sourceMappingURL=model.js.map

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bn": 305,
	"./bn.js": 305,
	"./bo": 306,
	"./bo.js": 306,
	"./br": 307,
	"./br.js": 307,
	"./bs": 308,
	"./bs.js": 308,
	"./ca": 309,
	"./ca.js": 309,
	"./cs": 310,
	"./cs.js": 310,
	"./cv": 311,
	"./cv.js": 311,
	"./cy": 312,
	"./cy.js": 312,
	"./da": 313,
	"./da.js": 313,
	"./de": 314,
	"./de-at": 315,
	"./de-at.js": 315,
	"./de-ch": 316,
	"./de-ch.js": 316,
	"./de.js": 314,
	"./dv": 317,
	"./dv.js": 317,
	"./el": 318,
	"./el.js": 318,
	"./en-au": 319,
	"./en-au.js": 319,
	"./en-ca": 320,
	"./en-ca.js": 320,
	"./en-gb": 321,
	"./en-gb.js": 321,
	"./en-ie": 322,
	"./en-ie.js": 322,
	"./en-nz": 323,
	"./en-nz.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es.js": 325,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./he": 339,
	"./he.js": 339,
	"./hi": 340,
	"./hi.js": 340,
	"./hr": 341,
	"./hr.js": 341,
	"./hu": 342,
	"./hu.js": 342,
	"./hy-am": 343,
	"./hy-am.js": 343,
	"./id": 344,
	"./id.js": 344,
	"./is": 345,
	"./is.js": 345,
	"./it": 346,
	"./it.js": 346,
	"./ja": 347,
	"./ja.js": 347,
	"./jv": 348,
	"./jv.js": 348,
	"./ka": 349,
	"./ka.js": 349,
	"./kk": 350,
	"./kk.js": 350,
	"./km": 351,
	"./km.js": 351,
	"./kn": 352,
	"./kn.js": 352,
	"./ko": 353,
	"./ko.js": 353,
	"./ky": 354,
	"./ky.js": 354,
	"./lb": 355,
	"./lb.js": 355,
	"./lo": 356,
	"./lo.js": 356,
	"./lt": 357,
	"./lt.js": 357,
	"./lv": 358,
	"./lv.js": 358,
	"./me": 359,
	"./me.js": 359,
	"./mi": 360,
	"./mi.js": 360,
	"./mk": 361,
	"./mk.js": 361,
	"./ml": 362,
	"./ml.js": 362,
	"./mr": 363,
	"./mr.js": 363,
	"./ms": 364,
	"./ms-my": 365,
	"./ms-my.js": 365,
	"./ms.js": 364,
	"./my": 366,
	"./my.js": 366,
	"./nb": 367,
	"./nb.js": 367,
	"./ne": 368,
	"./ne.js": 368,
	"./nl": 369,
	"./nl-be": 370,
	"./nl-be.js": 370,
	"./nl.js": 369,
	"./nn": 371,
	"./nn.js": 371,
	"./pa-in": 372,
	"./pa-in.js": 372,
	"./pl": 373,
	"./pl.js": 373,
	"./pt": 374,
	"./pt-br": 375,
	"./pt-br.js": 375,
	"./pt.js": 374,
	"./ro": 376,
	"./ro.js": 376,
	"./ru": 377,
	"./ru.js": 377,
	"./sd": 378,
	"./sd.js": 378,
	"./se": 379,
	"./se.js": 379,
	"./si": 380,
	"./si.js": 380,
	"./sk": 381,
	"./sk.js": 381,
	"./sl": 382,
	"./sl.js": 382,
	"./sq": 383,
	"./sq.js": 383,
	"./sr": 384,
	"./sr-cyrl": 385,
	"./sr-cyrl.js": 385,
	"./sr.js": 384,
	"./ss": 386,
	"./ss.js": 386,
	"./sv": 387,
	"./sv.js": 387,
	"./sw": 388,
	"./sw.js": 388,
	"./ta": 389,
	"./ta.js": 389,
	"./te": 390,
	"./te.js": 390,
	"./tet": 391,
	"./tet.js": 391,
	"./th": 392,
	"./th.js": 392,
	"./tl-ph": 393,
	"./tl-ph.js": 393,
	"./tlh": 394,
	"./tlh.js": 394,
	"./tr": 395,
	"./tr.js": 395,
	"./tzl": 396,
	"./tzl.js": 396,
	"./tzm": 397,
	"./tzm-latn": 398,
	"./tzm-latn.js": 398,
	"./tzm.js": 397,
	"./uk": 399,
	"./uk.js": 399,
	"./ur": 400,
	"./ur.js": 400,
	"./uz": 401,
	"./uz-latn": 402,
	"./uz-latn.js": 402,
	"./uz.js": 401,
	"./vi": 403,
	"./vi.js": 403,
	"./x-pseudo": 404,
	"./x-pseudo.js": 404,
	"./yo": 405,
	"./yo.js": 405,
	"./zh-cn": 406,
	"./zh-cn.js": 406,
	"./zh-hk": 407,
	"./zh-hk.js": 407,
	"./zh-tw": 408,
	"./zh-tw.js": 408
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 751;

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_success_page_signup_success__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SignupEmailPage = (function () {
    function SignupEmailPage(navCtrl, http, fb, gp) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.posts = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            number: ' ',
            account_type: '1',
            status: '1',
            permission: '3'
        };
    }
    SignupEmailPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupEmailPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupEmailPage.prototype.goSignupMobile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__["a" /* SignupMobilePage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SignupEmailPage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', number: ' ', account_type: '1', status: '1', permission: '3' }).subscribe(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    SignupEmailPage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) {
            return console.log(res);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__["a" /* UserMembershipCardPage */], {}, {
            animate: true,
            direction: 'forward'
        })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    SignupEmailPage.prototype.signMeUp = function () {
        var _this = this;
        var getFName = this.posts.first_name, getLName = this.posts.last_name, getEmail = this.posts.email, getPass = this.posts.password, baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl, checker = false;
        var nameRegEx = /^(([A-Za-z]+[\-\']?)*([A-Za-z\s]+)?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/, emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (getFName && getLName && getEmail && getPass) {
            checker = true;
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder'), thisVal = thisInput.val();
                if (thisInputName !== 'password') {
                    if (thisInputName == 'first_name' || thisInputName == 'last_name') {
                        if (nameRegEx.test(thisVal) == true) {
                            thisInput.removeClass('has-error').siblings('.text-validate').text();
                            checker = true;
                        }
                        else {
                            thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is invalid.');
                            checker = false;
                        }
                    }
                    else {
                        if (emailRegEx.test(thisVal) == true) {
                            thisInput.removeClass('has-error').siblings('.text-validate').text();
                            checker = true;
                        }
                        else {
                            thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is invalid.');
                            checker = false;
                        }
                    }
                }
                else {
                    thisInput.removeClass('has-error').siblings('.text-validate').text();
                }
            });
            if (!__WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup input').hasClass('has-error') && checker == true) {
                if (__WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').length == 0) {
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                }
                this.http.post(baseUrl + 'api/users/add', this.posts).subscribe(function (res) {
                    console.log(res);
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__page_signup_success_page_signup_success__["a" /* SignupSuccessPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                }, function (err) {
                    console.log(err.json());
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                    __WEBPACK_IMPORTED_MODULE_10_jquery__('input[name="email"]').addClass('has-error').siblings('.text-validate').text('Email already exists.');
                });
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-signup label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder');
                console.log(thisInput.val());
                if (thisInputName == 'password') {
                    if (thisInput.val().length !== 0) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Password is required.');
                    }
                }
                else {
                    if (thisInput.val().length !== 0) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is required.');
                    }
                }
            });
        }
    };
    return SignupEmailPage;
}());
SignupEmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-email',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-email/page-signup-email.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n  <p class="text-center subtitle">\n\n    Sign up with <a href="#" (click)="fbConnect()">Facebook</a>, <a href="#" (click)="gpConnect()">Google</a> or <a href="#" (click)="goSignupMobile()">mobile number</a>\n\n  </p>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n\n\n  <form class="form-signup">\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate">First name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate">Last name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" />\n\n      <span class="text-validate">Email address is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" />\n\n      <span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span>\n\n    </label>\n\n    <button class="btn-green" type="submit" (click)="signMeUp()">Sign Up</button>\n\n  </form>\n\n  <hr class="hr" />\n\n  <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-signup-email/page-signup-email.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignupEmailPage);

//# sourceMappingURL=page-signup-email.js.map

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/list/list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elasticTextarea__ = __webpack_require__(795);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__elasticTextarea__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticTextarea = (function () {
    function ElasticTextarea() {
        this.content = "";
        this.lineHeight = 20;
        this.maxExpand = 5;
        this.maxHeight = this.lineHeight * this.maxExpand;
    }
    ElasticTextarea.prototype.ngAfterViewInit = function () {
        this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
        this.txtArea.style.height = this.lineHeight + "px";
        this.maxHeight = this.lineHeight * this.maxExpand;
        this.txtArea.style.resize = 'none';
    };
    ElasticTextarea.prototype.onChange = function () {
        this.txtArea.style.height = this.lineHeight + "px";
        if (this.txtArea.scrollHeight < this.maxHeight) {
            this.txtArea.style.height = this.txtArea.scrollHeight + "px";
        }
        else {
            this.txtArea.style.height = this.maxHeight + "px";
        }
    };
    ElasticTextarea.prototype.clearInput = function () {
        this.content = "";
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea.prototype.setFocus = function () {
        this.ionTxtArea.setFocus();
    };
    return ElasticTextarea;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('ionTxtArea'),
    __metadata("design:type", Object)
], ElasticTextarea.prototype, "ionTxtArea", void 0);
ElasticTextarea = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'elastic-textarea',
        inputs: ['placeholder', 'lineHeight', 'maxExpand'],template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/components/elasticTextarea/elasticTextarea.html"*/'<!--suppress ALL -->\n<ion-textarea #ionTxtArea\n              placeholder=\'{{ "Type your message..." }}\'\n              [(ngModel)]="content"\n              (ngModelChange)=\'onChange($event)\'>\n</ion-textarea>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/components/elasticTextarea/elasticTextarea.html"*/
    }),
    __metadata("design:paramtypes", [])
], ElasticTextarea);

//# sourceMappingURL=elasticTextarea.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chatBubble__ = __webpack_require__(797);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chatBubble__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBubble = (function () {
    function ChatBubble() {
        this.messageType = __WEBPACK_IMPORTED_MODULE_1__providers__["b" /* MessageType */];
    }
    ChatBubble.prototype.formatEpoch = function (epoch) {
        return __WEBPACK_IMPORTED_MODULE_1__providers__["e" /* UtilService */].getCalendarDay(epoch);
    };
    return ChatBubble;
}());
ChatBubble = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'chat-bubble',
        inputs: ['chatMessage'],template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/components/chatBubble/chatBubble.html"*/'<div>\n  <div class="chat-bubble {{chatMessage.type === \'message_by_member\' ? \'right\' : \'left\'}}">\n    <div class="message">{{chatMessage.message}}</div>\n  </div>\n  <div class="message-detail {{chatMessage.type === \'message_by_member\' ? \'right\' : \'left\'}}">\n    <span>{{formatEpoch(chatMessage.epoch)}}</span>\n  </div>\n</div>\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/components/chatBubble/chatBubble.html"*/
    }),
    __metadata("design:paramtypes", [])
], ChatBubble);

//# sourceMappingURL=chatBubble.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard_attach_directive__ = __webpack_require__(799);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__keyboard_attach_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, _zone, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this._zone = _zone;
        this.platform = platform;
        this.shouldHide = true;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function (e) { return _this.onHide(e); });
        }
        this.btnClicked.subscribe(function (data) { return _this.shouldHide = false; }, function (err) { return console.log(err); });
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function (e) {
        if (this.shouldHide) {
            this.setElementPosition(0);
        }
        this.shouldHide = true;
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        var _this = this;
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            }, 100);
        });
    };
    return KeyboardAttachDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], KeyboardAttachDirective.prototype, "btnClicked", void 0);
KeyboardAttachDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[keyboardAttach]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.directive.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFindDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_user_find_deals_map_page_user_find_deals_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserFindDealsPage = (function () {
    function UserFindDealsPage(navCtrl, platform, api, storage) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.api = api;
        this.storage = storage;
        this.hasData = false;
    }
    UserFindDealsPage.prototype.ionViewWillEnter = function () {
        this.getDealsAndFavorites();
    };
    UserFindDealsPage.prototype.IonViewDidLoad = function () {
    };
    UserFindDealsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserFindDealsPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsPage.prototype.showCategoryMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__["a" /* CategoryMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsPage.prototype.showSortMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__["a" /* SortMenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsPage.prototype.getDealsAndFavorites = function () {
        var _this = this;
        this.storage.get("user").then(function (user) {
            _this.user = user;
            _this.api.Deals.deals_list().then(function (deals) {
                _this.deals = deals;
                _this.hasData = true;
                console.log(user._id);
                _this.api.Favorites.favorite_list(user._id).then(function (favorites) {
                    _this.favorites = favorites;
                    // console.log(favorites);
                    if (_this.hasData) {
                        _this.favorites.forEach(function (favorite) {
                            _this.deals.forEach(function (deal) {
                                if (deal._id === favorite.deals_id[0]._id) {
                                    deal.is_favorite = true;
                                }
                            });
                        });
                    }
                });
            });
        });
    };
    UserFindDealsPage.prototype.getBusiness = function (business, template) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business: business, template: template }, {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsPage.prototype.goMapView = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__page_user_find_deals_map_page_user_find_deals_map__["a" /* UserFindDealsMapPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserFindDealsPage.prototype.addToFavorites = function (deal) {
        var selectedButton = document.getElementById('addToFavorite' + deal._id);
        selectedButton.style.transition = "all 0s ease-in-out";
        selectedButton.className += " disabled";
        selectedButton.setAttribute("disabled", true);
        selectedButton.innerHTML = "";
        selectedButton.innerHTML = "Added to Favorites";
        var deal_body = {
            deals_id: deal._id,
            business_id: deal.business_id[0]._id,
            customer_id: this.user._id
        };
        this.api.Favorites.add_to_favorite(deal_body).then(function (favorite) {
            console.log(favorite);
        })
            .catch(function (error) {
            console.log(error._body);
        });
    };
    return UserFindDealsPage;
}());
UserFindDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-find-deals',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-find-deals/page-user-find-deals.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="jumbotron search-banner">\n\n    <form class="form-inline form-search-deals text-center">\n\n      <input type="text" class="form-control" placeholder="Search GoPage Deals">\n\n      <label>\n\n        <span class="fa fa-map-marker"></span>\n\n        <input type="text" class="form-control" placeholder="Los Angeles, CA">\n\n      </label>\n\n      <button class="fa fa-search btn-search-deals" type="submit"></button>\n\n    </form>\n\n  </div>\n\n\n\n  <nav id="filter-sort-map" class="navbar navbar-light">\n\n    <ul class="nav nav-tabs">\n\n      <li class="nav-item">\n\n        <a class="nav-link filter-categories" (click)="showCategoryMenu()"><i class="fa fa-filter"></i> Categories</a>\n\n      </li>\n\n      <!-- <li class="nav-item">\n\n        <a class="nav-link filter-sort" (click)="showSortMenu()"><i class="fa fa-sort"></i> Sort</a>\n\n      </li> -->\n\n      <li class="nav-item">\n\n        <a class="nav-link" (click)="goMapView()"><i class="fa fa-map-marker"></i> Map view</a>\n\n      </li>\n\n    </ul>\n\n  </nav>\n\n\n\n  <div class="categories-header">\n\n    <div class="row">\n\n      <div class="col">\n\n        <p class="deals-counter">\n\n          <span class="deals-found">72</span> out of <span class="deals-total">262</span> deals\n\n        </p>\n\n        <ion-item>\n\n          <ion-label> Show Image</ion-label>\n\n          <ion-toggle [(ngModel)]="toggleImage"></ion-toggle>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div *ngIf="hasData">\n\n    <div *ngFor="let deal of deals">\n\n      <p>{{deal.business_name}}</p>\n\n    </div>\n\n  </div> (click)=this.business({{deal.business[0]._id }})"" href=""-->\n\n\n\n  <div class="categories-main">\n\n    <div class="row">\n\n      <div class="col-12 col-sm-9 holder-categories-result1">\n\n        <div class="row">\n\n          <div class="col categories-result" *ngIf="hasData">\n\n            <div class="deal media {{toggleImage ? \'toggled\' : \'\'}}" *ngFor="let deal of deals; let i = index">\n\n              <div class="col-xs-8">\n\n                <a class="deal-thumbnail" href="" *ngIf="toggleImage">\n\n                  <img class="d-flex mr-3" src="{{deal.photo.url !== unknown ? deal.photo.url : \'assets/images/placeholder.jpg\'}}" alt="{{deal.template}}">\n\n                </a>\n\n                <div class="media-body align-self-center">\n\n                  <a class="deal-title" href="">\n\n                    <h6 class="mt-0">{{deal.template}}</h6>\n\n                  </a>\n\n                  <a class="business-link" href="">{{deal.business_name}}</a>\n\n                  <p class="business-address">{{deal.business_id[0].country}}, {{deal.business_id[0].state}}</p>\n\n                  <p class="expiration-date"><i class="fa fa-clock-o fa-lg"></i> Expires {{deal.end_date | date: \'MM/dd/yyyy\'}}</p>\n\n                </div>\n\n              </div>\n\n\n\n              <div class="col-xs-4">\n\n                <div class="deals-button">\n\n                  <div *ngIf="deal.is_favorite; then Favorite  else  notFavorite"></div>\n\n                  <ng-template #notFavorite><a class="btn btn-claim" [attr.id]="\'addToFavorite\'+deal._id" id="addToFavorite" (click)="addToFavorites(deal)">Add to Favorites <i class="fa fa-chevron-right"></i></a> <br class="btn-break"></ng-template>\n\n                  <ng-template #Favorite><a class="btn btn-claim disabled" id="addToFavorite" disabled>Added to Favorites</a> <br class="btn-break"></ng-template>\n\n                  <a class="btn btn-more" (click)="getBusiness(deal.business_id[0],deal.template)" >More deals <i class="fa fa-chevron-right"></i></a>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="row">\n\n    <nav class="col-12 holder-pagination">\n\n      <ul class="pagination list-unstyled">\n\n        <li class="page-item prev-page">\n\n          <button class="page-link prev-page" ion-button small><i class="fa fa-angle-left"></i>&nbsp;<span class="prev">Prev</span></button>\n\n        </li>\n\n        <li class="page-item"><button class="page-link" ion-button small>1</button></li>\n\n        <li class="page-item"><button class="page-link" ion-button small>2</button></li>\n\n        <li class="page-item"><button class="page-link" ion-button small>3</button></li>\n\n        <li class="page-item"><button class="page-link active" ion-button small>4</button></li>\n\n        <li class="page-item">\n\n          <button class="page-link next-page" ion-button small><span class="next">Next</span>&nbsp;<i class="fa fa-angle-right"></i></button>\n\n        </li>\n\n      </ul>\n\n    </nav>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-user-find-deals/page-user-find-deals.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], UserFindDealsPage);

var _a, _b, _c, _d;
//# sourceMappingURL=page-user-find-deals.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_filtered_deals_page_user_filtered_deals__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//database service


var CategoryMenuPage = (function () {
    function CategoryMenuPage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.hasData = false;
    }
    CategoryMenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.api.BusinessCategory.business_category().then(function (business_category) {
            _this.business_category = business_category;
            _this.hasData = true;
        });
    };
    CategoryMenuPage.prototype.goFilterBusiness = function (business_name) {
        var _this = this;
        // console.log(business_category);
        var business_category = {
            'category': business_name,
            'sort': '1'
        };
        var filtered = [];
        this.api.BusinessCategoryFilter.business_category_filter(business_category).then(function (business_filter) {
            _this.business_filter_data = business_filter;
            business_filter.forEach(function (filter) {
                if (filter.business_id.length !== 0) {
                    filtered.push(filter);
                }
            });
            console.log('boom');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_user_filtered_deals_page_user_filtered_deals__["a" /* UserFilteredDealsPage */], { business_category: filtered }, {
                animate: true,
                direction: 'forward'
            });
        });
    };
    CategoryMenuPage.prototype.goBack = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    return CategoryMenuPage;
}());
CategoryMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category-menu',template:/*ion-inline-start:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-category-menu/page-category-menu.html"*/'<ion-content padding class="content-category-menu">\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <ion-list class="menu-list">\n\n    <ul class="categories-list" *ngFor="let business of business_category">\n\n\n\n      <li><a href="#"><img src="assets/icon/icon-books.svg" (click)="goFilterBusiness(business.name)">  {{ business.name }}</a></li>\n\n      <!-- <li class="active"><a href="#"><img src="assets/icon/icon-automotive.svg" alt="Automotive">Automotive</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-books.svg" alt="Books, Music &amp; Cinema">Books, Music &amp; Cinema</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-culture.svg" alt="Culture &amp; Arts">Culture &amp; Arts</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-dining.svg" alt="Dining, Cafes &amp; Restaurants">Dining, Cafes &amp; Restaurants</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-education.svg" alt="Education">Education</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-finance.svg" alt="Finance, Banks &amp; Insurance">Finance, Banks &amp; Insurance</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-food.svg" alt="Food Stores">Food Stores</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-government.svg" alt="Government Services">Government Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-health.svg" alt="Health &amp; Beauty">Health &amp; Beauty</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-house.svg" alt="House &amp; Home Services">House &amp; Home Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-nightlife.svg" alt="Nightlife &amp; Clubs">Nightlife &amp; Clubs</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-outdoor.svg" alt="Outdoor Adventures">Outdoor Adventures</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-professional.svg" alt="Professional Services">Professional Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-real-estate.svg" alt="Real Estate &amp; Related">Real Estate &amp; Related</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-shopping.svg" alt="Shopping &amp; Stores">Shopping &amp; Stores</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-sports.svg" alt="Sports &amp; Fitness">Sports &amp; Fitness</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-travel.svg" alt="Travel &amp; Transportation">Travel &amp; Transportation</a></li> -->\n\n    </ul>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/Documents/node/gopage/merge/up/src/pages/page-menu/page-category-menu/page-category-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__["a" /* ApiService */]])
], CategoryMenuPage);

//# sourceMappingURL=page-category-menu.js.map

/***/ })

},[434]);
//# sourceMappingURL=main.js.map