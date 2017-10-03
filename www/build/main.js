webpackJsonp([1],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_signup_page_signup__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(71);
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
        selector: 'page-slider',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-slider/page-slider.html"*/'<!-- <ion-header no-shadow>\n\n  <ion-navbar>\n\n    <button class="btn-green" (click)="signUp()">Get Started</button>\n\n    <button class="btn-green-out" (click)="signIn()">Sign In</button>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content no-bounce class="page-slider text-center">\n\n  <ion-slides pager="true" (ionSlideNextStart)="onSlideNext($event)">\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <!-- <p class="subtitle">\n\n        Helping members &amp; small<br> business win\n\n      </p> -->\n\n      <img class="slider-img main-image" src="assets/images/member-main-image.png" alt="">\n\n      <h3 class="main-title">Your Go To App for Local</h3>\n\n      <h3 class="main-title">Loyalty Deals &amp; Discounts</h3>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n\n\n      <img class="slider-img" src="assets/images/member-iphone-login.png" alt="">\n\n      <p class="subtitle">\n\n        With GoPage you are a preferred <br>customer and receive the best deals and <br> alerts from your favorite business.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-qrcode.png" alt="">\n\n      <p class="subtitle">\n\n        Get rewarded for your loyalty! Use your <br>loyalty punchcard and redeem your <br> loyalty rewards from your favorite local <br> businesses.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-map.png" alt="">\n\n      <p class="subtitle">\n\n        Your GoPage App finds the deals you are<br> looking for from registered GoPage <br>businesses.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img" src="assets/images/member-iphone-messages.png" alt="">\n\n      <p class="subtitle">\n\n        Your favorite businesses alert <br>you first about deals, discounts <br>or events so you never miss out!\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <button class="btn-slider btn-green" (click)="signUp()">Get Started</button>\n\n  <button class="btn-slider btn-green-out" (click)="signIn()">Sign In</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-slider/page-slider.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SliderPage);

//# sourceMappingURL=page-slider.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupMobilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_mobile_success_page_signup_mobile_success__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_email_page_signup_email__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(50);
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
        selector: 'page-signup-mobile',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-signup-mobile/page-signup-mobile.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <div class="form1">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n    </p>\n\n    <p class="text-center subtitle">\n\n      Sign up with <a href="#" (click)="fbConnect()">Facebook</a>, <a href="#" (click)="gpConnect()">Google</a> or <a href="#" (click)="goSignupEmail()">email address</a>\n\n    </p>\n\n    <div class="divider">\n\n      <span>or</span>\n\n    </div>\n\n    <p class="description">Enter your mobile number</p>\n\n    <form class="form-signup">\n\n      <label>\n\n        <div class="holder-country-code">\n\n          <div class="country-code">\n\n            <img src="assets/images/icon-flag-us.jpg" alt=""/>\n\n            <span class="fa fa-caret-down"></span>\n\n          </div>\n\n          <ul class="country-dropdown">\n\n            <li class="country-dropdown-val">\n\n              <img src="assets/images/icon-flag-us.jpg" alt=""/><span class="country-name">U.S. </span><span class="country-area-code">(+1)</span>\n\n            </li>\n\n            <li class="country-dropdown-val">\n\n              <img src="assets/images/icon-flag-ca.jpg" alt=""/><span class="country-name">Canada </span><span class="country-area-code">(+1)</span>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n        <input type="number" name="number" placeholder="Mobile number" [(ngModel)]="posts.number"/>\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="signMeUp()">Sign Up</button>\n\n    </form>\n\n    <hr class="hr" />\n\n    <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n  </div>\n\n\n\n  <div class="form2">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n      Verify Your Mobile Number\n\n    </p>\n\n    <form class="form-verify">\n\n      <label>\n\n        <input type="text" placeholder="Verification Code">\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="verifyMe()">Verify</button>\n\n    </form>\n\n  </div>\n\n\n\n  <div class="form3">\n\n    <p class="title">\n\n      <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n      Create a Password\n\n    </p>\n\n    <form class="form-password">\n\n      <label>\n\n        <input id="enter-password" class="input-mobile" type="password" placeholder="Enter password" />\n\n        <input id="confirm-password" class="input-mobile" type="password" placeholder="Confirm password" />\n\n        <span class="text-validate"></span>\n\n      </label>\n\n      <button class="btn-green" type="submit" (click)="createMyPass()">Submit</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-signup-mobile/page-signup-mobile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], SignupMobilePage);

//# sourceMappingURL=page-signup-mobile.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(50);
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
        selector: 'page-reset-pass',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-reset-pass/page-reset-pass.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password\n\n  </p>\n\n  <form class="form-reset">\n\n    <label><input type="email" name="email" placeholder="Email or Mobile number" [(ngModel)]="posts.email" /><span class="text-validate">Email address is required.</span></label>\n\n    <button class="btn-green" type="submit" (click)="resetMe()">Send</button>\n\n  </form>\n\n  <p class="description text-center">Enter the email address or mobile number associated with your account, and we’ll email or text your new random generated password.<p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-reset-pass/page-reset-pass.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], ResetPassPage);

//# sourceMappingURL=page-reset-pass.js.map

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.module": [
		625,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_reset_pass_page_reset_pass__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(50);
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
        selector: 'page-login',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-login/page-login.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card>\n\n\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goSignup()">\n\n    Welcome Back\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <form class="form-login">\n\n    <label><input type="email" name="username" placeholder="Email or Phone" [(ngModel)]="posts.username" /><span class="text-validate">Email address is required.</span></label>\n\n    <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /><span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span></label>\n\n    <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n  </form>\n\n  <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  <hr class="hr" />\n\n  <p class="description">Don\'t have an account? <a href="#" (click)="goSignup()">Sign Up</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-login/page-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__["a" /* ApiService */]])
], LoginPage);

//# sourceMappingURL=page-login.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoyaltyCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_loyalty_card_deals_page_user_loyalty_card_deals__ = __webpack_require__(286);
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
            console.log(user);
            _this.api.LoyaltyCards.loyalty_list(user._id).then(function (loyalty) {
                _this.loyalties = loyalty;
                _this.hasData = true;
                console.log(loyalty[0].busines);
            });
        });
    };
    UserLoyaltyCardsPage.prototype.showCardDeals = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_user_loyalty_card_deals_page_user_loyalty_card_deals__["a" /* UserLoyaltyCardDealsPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    return UserLoyaltyCardsPage;
}());
UserLoyaltyCardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-loyalty-cards',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-loyalty-cards/page-user-loyalty-cards.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="title-holder">\n\n    <p class="title">\n\n      Loyalty Cards\n\n    </p>\n\n  </div>\n\n\n\n  <div class="business-cards-holder" *ngIf="hasData">\n\n    <div class="business-cards" *ngFor="let loyalty of loyalties; let i = index;" tappable (click)="showCardDeals()"> \n\n      <div class="img-holder">\n\n        <img [src]="loyalty.deals_id[0].photo.url" alt="">\n\n      </div>\n\n      <div class="text-holder">\n\n        <h3 class="card-title-text">{{loyalty.business_id[0].company_name}}</h3>\n\n        <span class="card-location-text">{{loyalty.business_id[0].country}}</span>\n\n        <span class="card-count-text">{{loyalty.loyalty_details.stamp}} stamp</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-loyalty-cards/page-user-loyalty-cards.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
], UserLoyaltyCardsPage);

var _a, _b, _c;
//# sourceMappingURL=page-user-loyalty-cards.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFindDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_menu_page_category_menu_page_category_menu__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(44);
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
        var _this = this;
        this.storage.get("user").then(function (user) {
            console.log(user);
            _this.api.Deals.deals_list().then(function (deals) {
                _this.deals = deals;
                _this.hasData = true;
                console.log(_this.deals);
            });
        });
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
    UserFindDealsPage.prototype.IonViewDidLoad = function () {
    };
    UserFindDealsPage.prototype.getBusiness = function (business) {
        console.log(business);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business: business }, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserFindDealsPage;
}());
UserFindDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-find-deals',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-find-deals/page-user-find-deals.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="jumbotron search-banner">\n\n    <form class="form-inline form-search-deals text-center">\n\n      <input type="text" class="form-control" placeholder="Search GoPage Deals">\n\n      <label>\n\n        <span class="fa fa-map-marker"></span>\n\n        <input type="text" class="form-control" placeholder="Los Angeles, CA">\n\n      </label>\n\n      <button class="fa fa-search btn-search-deals" type="submit"></button>\n\n    </form>\n\n  </div>\n\n\n\n  <nav id="filter-sort-map" class="navbar navbar-light">\n\n    <ul class="nav nav-tabs">\n\n      <li class="nav-item">\n\n        <a class="nav-link filter-categories" (click)="showCategoryMenu()"><i class="fa fa-filter"></i> Categories</a>\n\n      </li>\n\n      <li class="nav-item">\n\n        <a class="nav-link filter-sort" (click)="showSortMenu()"><i class="fa fa-sort"></i> Sort</a>\n\n      </li>\n\n      <li class="nav-item">\n\n        <a class="nav-link" href=""><i class="fa fa-map-marker"></i> Map view</a>\n\n      </li>\n\n    </ul>\n\n  </nav>\n\n\n\n  <div class="categories-header">\n\n    <div class="row">\n\n      <div class="col">\n\n        <p class="deals-counter">\n\n          <span class="deals-found">72</span> out of <span class="deals-total">262</span> deals\n\n        </p>\n\n        <ion-item>\n\n          <ion-label> Show Image</ion-label>\n\n          <ion-toggle [(ngModel)]="toggleImage"></ion-toggle>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div *ngIf="hasData">\n\n    <div *ngFor="let deal of deals">\n\n      <p>{{deal.business_name}}</p>\n\n    </div>\n\n  </div> (click)=this.business({{deal.business[0]._id }})"" href=""-->\n\n\n\n  <div class="categories-main">\n\n    <div class="row">\n\n      <div class="col-12 col-sm-9 holder-categories-result1">\n\n        <div class="row">\n\n          <div class="col categories-result" *ngIf="hasData">\n\n            <div class="deal media {{toggleImage ? \'toggled\' : \'\'}}" *ngFor="let deal of deals">\n\n              <div class="col-xs-8">\n\n                <a class="deal-thumbnail" href="" *ngIf="toggleImage">\n\n                  <img class="d-flex mr-3" src="{{deal.photo.url !== unknown ? deal.photo.url : \'assets/images/placeholder.jpg\'}}" alt="{{deal.template}}">\n\n                </a>\n\n                <div class="media-body align-self-center">\n\n                  <a class="deal-title" href="">\n\n                    <h6 class="mt-0">{{deal.template}}</h6>\n\n                  </a>\n\n                  <a class="business-link" href="">{{deal.business_name}}</a>\n\n                  <p class="business-address">{{deal.business_id[0].country}}, {{deal.business_id[0].state}}</p>\n\n                  <p class="expiration-date"><i class="fa fa-clock-o fa-lg"></i> Expires {{deal.end_date | date: \'MM/dd/yyyy\'}}</p>\n\n                </div>\n\n              </div>\n\n\n\n              <div class="col-xs-4">\n\n                <div class="deals-button">\n\n                  <a class="btn btn-claim" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Add to Favorites <i class="fa fa-chevron-right"></i></a> <br class="btn-break">\n\n                  <a class="btn btn-more" (click)="getBusiness(deal.business_id[0])" >More deals <i class="fa fa-chevron-right"></i></a>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="row">\n\n    <nav class="col-12 holder-pagination">\n\n      <ul class="pagination list-unstyled">\n\n        <li class="page-item prev-page">\n\n          <button class="page-link prev-page" ion-button small><i class="fa fa-angle-left"></i>&nbsp;<span class="prev">Prev</span></button>\n\n        </li>\n\n        <li class="page-item"><button class="page-link" ion-button small>1</button></li>\n\n        <li class="page-item"><button class="page-link" ion-button small>2</button></li>\n\n        <li class="page-item"><button class="page-link" ion-button small>3</button></li>\n\n        <li class="page-item"><button class="page-link active" ion-button small>4</button></li>\n\n        <li class="page-item">\n\n          <button class="page-link next-page" ion-button small><span class="next">Next</span>&nbsp;<i class="fa fa-angle-right"></i></button>\n\n        </li>\n\n      </ul>\n\n    </nav>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-find-deals/page-user-find-deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
], UserFindDealsPage);

//# sourceMappingURL=page-user-find-deals.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryMenuPage; });
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


var CategoryMenuPage = (function () {
    function CategoryMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
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
        selector: 'page-category-menu',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-category-menu/page-category-menu.html"*/'<ion-content padding class="content-category-menu">\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <ion-list class="menu-list">\n\n    <ul class="categories-list">\n\n      <li class="active"><a href="#"><img src="assets/icon/icon-automotive.svg" alt="Automotive">Automotive</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-books.svg" alt="Books, Music &amp; Cinema">Books, Music &amp; Cinema</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-culture.svg" alt="Culture &amp; Arts">Culture &amp; Arts</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-dining.svg" alt="Dining, Cafes &amp; Restaurants">Dining, Cafes &amp; Restaurants</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-education.svg" alt="Education">Education</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-finance.svg" alt="Finance, Banks &amp; Insurance">Finance, Banks &amp; Insurance</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-food.svg" alt="Food Stores">Food Stores</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-government.svg" alt="Government Services">Government Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-health.svg" alt="Health &amp; Beauty">Health &amp; Beauty</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-house.svg" alt="House &amp; Home Services">House &amp; Home Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-nightlife.svg" alt="Nightlife &amp; Clubs">Nightlife &amp; Clubs</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-outdoor.svg" alt="Outdoor Adventures">Outdoor Adventures</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-professional.svg" alt="Professional Services">Professional Services</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-real-estate.svg" alt="Real Estate &amp; Related">Real Estate &amp; Related</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-shopping.svg" alt="Shopping &amp; Stores">Shopping &amp; Stores</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-sports.svg" alt="Sports &amp; Fitness">Sports &amp; Fitness</a></li>\n\n      <li><a href="#"><img src="assets/icon/icon-travel.svg" alt="Travel &amp; Transportation">Travel &amp; Transportation</a></li>\n\n    </ul>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-category-menu/page-category-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], CategoryMenuPage);

//# sourceMappingURL=page-category-menu.js.map

/***/ }),

/***/ 270:
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
        selector: 'page-sort-menu',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-sort-menu/page-sort-menu.html"*/'<ion-content padding class="content-sort-menu">\n  <p class="title">\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n  </p>\n\n  <ion-list>\n    <h5>Sort by</h5>\n    <ion-item>\n      <ion-label>Sort by Relevance</ion-label>\n      <ion-checkbox [(ngModel)]="relevance"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sort by Distance</ion-label>\n      <ion-checkbox [(ngModel)]="distance"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sort by Favorites</ion-label>\n      <ion-checkbox [(ngModel)]="favorites"></ion-checkbox>\n    </ion-item>\n\n    <div class="sortby-button">\n      <button class="btn cancel-btn" role="button" (click)="goBack()">Cancel</button>\n      <button class="btn done-btn" role="button" (click)="goBack()">Done</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-sort-menu/page-sort-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SortMenuPage);

//# sourceMappingURL=page-sort-menu.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
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
    }
    UserDealsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.business = this.navParams.get('business');
        console.log(this.business);
        this.api.Deals.deals_list(this.business._id).then(function (deals) {
            _this.deals = deals;
            _this.hasData = true;
            console.log(_this.deals);
        });
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
    UserDealsPage.prototype.IonViewDidLoad = function () {
    };
    return UserDealsPage;
}());
UserDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-deals',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-deals/page-user-deals.html"*/'<ion-header>\n  <ion-navbar>\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="deals-page">\n  <div *ngIf="hasData">\n    <ion-slides>\n      <ion-slide>\n        <img src="assets/images/slider-img03.jpg" alt="Deals photo">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/images/slider-img03.jpg" alt="Deals photo">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/images/slider-img03.jpg" alt="Deals photo">\n      </ion-slide>\n    </ion-slides>\n\n    <div class="row">\n      <div class="col-12">\n        <h4 class="deal-title">Free 1 dozen donuts for every 2 dozen purchase</h4>\n      </div>\n\n      <div class="col-12">\n        <div class="media" *ngFor="let deal of deals">\n          <img src="{{deal.photo.url !== unknown ? deal.photo.url : \'assets/images/placeholder.jpg\'}}" alt="{{deal.template}}">\n          <div class="media-body">\n            <a href="#"><h5>{{deal.template}}</h5></a>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 share-deal">\n        <p>Share this deal</p>\n        <ul class="social-list">\n          <li><a href="#"><i class="fa fa-facebook fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-twitter fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-envelope fa-lg"></i></a></li>\n          <li><a href="#"><i class="fa fa-pinterest fa-lg"></i></a></li>\n        </ul>\n      </div>\n\n      <div class="col-12 about-business">\n        <h5 class="about-title">About {{business.company_name}}</h5>\n        <p class="about-description">{{business.description}}</p>\n\n        <ul class="social-links list-unstyled">\n          <li>\n            <i class="fa fa-map-marker fa-2x"></i>\n            <span class="business-name">{{business.company_name}}</span> <br>\n            <span class="business-address"> {{business.state}}, {{business.country}}, {{business.zip_postal}} </span>\n          </li>\n          <li>\n            <i class="fa fa-clock-o fa-2x"></i>\n              Open today 8:00AM - 12:30AM\n              <a class="toggle-collapse">(show more)</a>\n              <ul class="list-unstyled">\n                <li><strong>Monday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Tuesday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Wednesday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Thursday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Friday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Saturday</strong> 8:00AM - 12:30AM</li>\n                <li><strong>Sunday</strong> 8:00AM - 12:30AM</li>\n              </ul>\n          </li>\n          <li>\n            <i class="fa fa-phone fa-2x"></i>\n            {{business.phone_number}}\n          </li>\n          <li>\n            <i class="fa fa-globe fa-2x"></i>\n            {{business.company_website}}\n          </li>\n          <li>\n            <i class="fa fa-envelope fa-2x"></i>\n            {{business.business_email}}\n          </li>\n          <li>\n            <i class="fa fa-facebook fa-2x"></i>\n            GoPageApp\n          </li>\n          <li>\n            <i class="fa fa-twitter fa-2x"></i>\n            @gopageapp\n          </li>\n          <li>\n            <i class="fa fa-instagram fa-2x"></i>\n            @gopageco\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-12">\n        <h5>Location</h5>\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.4096210792902!2d-123.1095483788257!3d49.27982224000646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77c545b8651d683a!2sT%26T+Supermarket!5e0!3m2!1sen!2sph!4v1505114924507" id="google-map" frameborder="0" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-deals/page-user-deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], UserDealsPage);

//# sourceMappingURL=page-user-deals.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(46);
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
    function UserFavoritesPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
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
    return UserFavoritesPage;
}());
UserFavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-favorites',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-favorites/page-user-favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="title">\n\n    <!-- <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()"> -->\n\n    Favorites Page\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-favorites/page-user-favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], UserFavoritesPage);

//# sourceMappingURL=page-user-favorites.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(46);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    return UserInboxPage;
}());
UserInboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-inbox',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-inbox/page-user-inbox.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="title">\n\n    <!-- <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()"> -->\n\n    Inbox Page\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-inbox/page-user-inbox.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], UserInboxPage);

//# sourceMappingURL=page-user-inbox.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__ = __webpack_require__(70);
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
        selector: 'page-signup-success',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-signup-success/page-signup-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Sign Up Success\n\n  </p>\n\n  <p class="description text-center">We’ve just emailed you a link. <br>Please check your inbox and confirm your email<p>\n\n  <a class="btn btn-green text-center" (click)="goLogin()">Okay</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-signup-success/page-signup-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SignupSuccessPage);

//# sourceMappingURL=page-signup-success.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupMobileSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_signup_email_page_signup_email__ = __webpack_require__(70);
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
        selector: 'page-signup-mobile-success',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-signup-mobile-success/page-signup-mobile-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Sign Up Success\n\n  </p>\n\n  <p class="description text-center">You have successfully registered. <br>You can now log-in.<p>\n\n  <a class="btn btn-green text-center" (click)="goLogin()">Okay</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-signup-mobile-success/page-signup-mobile-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SignupMobileSuccessPage);

//# sourceMappingURL=page-signup-mobile-success.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_reset_pass_page_reset_pass__ = __webpack_require__(146);
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
        selector: 'page-reset-pass-success',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-reset-pass-success/page-reset-pass-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password Success\n\n  </p>\n\n  <p class="description text-center">You should receive an email/text from us shortly. <br>We’ll meet you back here.<p>\n\n  <a class="btn btn-green text-center" (click)="goHome()">Back to Login</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-reset-pass-success/page-reset-pass-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ResetPassSuccessPage);

//# sourceMappingURL=page-reset-pass-success.js.map

/***/ }),

/***/ 281:
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
        selector: 'page-item-details',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/item-details/item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/item-details/item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoyaltyCardDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service_component__ = __webpack_require__(45);
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
        this.storage.get('user').then(function (user) {
            _this.api.LoyaltyDeals.loyaltyDeal(user._id, user.account_type).then(function (deal) {
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-page-user-loyalty-card-deals',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.html"*/'<!--\n\n  Generated template for the PageUserLoyaltyCardDealsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <div class="back-btn-holder" tappable (click)="backToLoyaltyCards()">\n\n    <ion-icon ios="ios-arrow-back"></ion-icon>\n\n    <p>Back to Loyalty Cards</p>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="card-deals-holder">\n\n    <div class="card-deal" *ngFor="let deal of deals;">\n\n      <div class="img-holder">\n\n        <img [src]="deal.photo.url" alt="">\n\n      </div>\n\n      <div class="text-holder">\n\n        <h3 class="deal-title-text">{{deal.title}}</h3>\n\n        <span class="card-stamp-text">5 stamps</span>\n\n        <span class="card-expiration-text">Expires {{deal.end_date | date : \'MM/dd/yyyy\'}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_service_component__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_api_service_component__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], UserLoyaltyCardDealsPage);

var _a, _b, _c, _d;
//# sourceMappingURL=page-user-loyalty-card-deals.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_email_page_signup_email__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_page_signup_mobile_page_signup_mobile__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_page_signup_success_page_signup_success__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_page_signup_mobile_success_page_signup_mobile_success__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_page_menu_page_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_menu_page_category_menu_page_category_menu__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_page_menu_page_sort_menu_page_sort_menu__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_item_details_item_details__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_page_user_loyalty_cards_page_user_loyalty_cards__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_page_user_favorites_page_user_favorites__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_page_user_inbox_page_user_inbox__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_page_user_deals_page_user_deals__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_list_list__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_screen_orientation__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_qrcode2__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_barcode_scanner__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_api_service_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(44);
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
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/page-user-loyalty-card-deals/page-user-loyalty-card-deals.module#UserLoyaltyCardDealsPageModule', name: 'UserLoyaltyCardDealsPage', segment: 'page-user-loyalty-card-deals', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_30_ngx_qrcode2__["a" /* NgxQRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_find_deals_page_user_find_deals__["a" /* UserFindDealsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_32__service_api_service_component__["a" /* ApiService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
        this.LoyaltyCards = {
            loyalty_list: function (customerId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/list/" + customerId).map(function (response) {
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_loyalty_cards_page_user_loyalty_cards__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_find_deals_page_user_find_deals__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_user_favorites_page_user_favorites__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_inbox_page_user_inbox__ = __webpack_require__(273);
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
        selector: 'page-menu',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-menu.html"*/'<ion-content padding class="content-page-menu">\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <ion-list class="menu-list">\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <hr class="divider" />\n\n  <a class="logout" href="#" (click)="logOut()">Logout</a>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-menu/page-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MenuPage);

//# sourceMappingURL=page-menu.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    // baseUrl : 'https://warm-beach-10670.herokuapp.com/'
    baseUrl: 'http://localhost:5015/'
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMembershipCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(45);
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
        selector: 'page-user-membership-card',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-user-membership-card/page-user-membership-card.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="holder-qrcode" *ngIf="hasData" >\n\n    <p class="member-name">{{user.first_name}} {{user.last_name}}</p>\n\n    <ion-card *ngIf="createdCode">\n\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n    </ion-card>\n\n    <p class="qrcode-id">{{user.membership_number}}</p>\n\n  </div>\n\n</ion-content>\n\n\n\n<!-- <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button> -->\n\n  <!-- <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button> -->\n\n <!--  <ion-item>\n\n\n\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n\n    </ion-input>\n\n  </ion-item>\n\n -->\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-user-membership-card/page-user-membership-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], UserMembershipCardPage);

//# sourceMappingURL=page-user-membership-card.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_page_slider_page_slider__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(280);
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
    function MyApp(platform, menu, statusBar, splashScreen, screenOrientation) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.screenOrientation = screenOrientation;
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/app/app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n\n\n\n<!-- <ion-menu [content]="nav">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu> -->\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(281);
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
        selector: 'page-list',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/list/list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_slider_page_slider__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_email_page_signup_email__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(50);
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
        selector: 'page-signup',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-signup/page-signup.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">Sign Up\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <button class="btn btn-green" (click)="goSignupEmail()"><span class="fa fa-envelope-o"></span> Sign Up with Email</button>\n\n  <button class="btn btn-green" (click)="goSignupMobile()"><span class="fa fa-mobile"></span> Sign Up with Mobile number</button>\n\n\n\n  <!-- <form class="form-signup">\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate">First name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate">Last name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" />\n\n      <span class="text-validate">Email address is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" />\n\n      <span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span>\n\n    </label>\n\n    <input class="btn-green" type="submit" value="Sign Up" (click)="signMeUp()" />\n\n  </form> -->\n\n  <!-- <p class="description">By signing up, you agree to GoPage\'s <br><a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></p> -->\n\n  <hr class="hr" />\n\n  <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-signup/page-signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignupPage);

//# sourceMappingURL=page-signup.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_login_page_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_membership_card_page_user_membership_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_signup_success_page_signup_success__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_signup_mobile_page_signup_mobile__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(50);
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
        selector: 'page-signup-email',template:/*ion-inline-start:"/home/fullstack/customer/test-gopage/src/pages/page-signup-email/page-signup-email.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card> -->\n\n\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n  <p class="text-center subtitle">\n\n    Sign up with <a href="#" (click)="fbConnect()">Facebook</a>, <a href="#" (click)="gpConnect()">Google</a> or <a href="#" (click)="goSignupMobile()">mobile number</a>\n\n  </p>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n\n\n  <form class="form-signup">\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate">First name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate">Last name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" />\n\n      <span class="text-validate">Email address is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" />\n\n      <span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span>\n\n    </label>\n\n    <button class="btn-green" type="submit" (click)="signMeUp()">Sign Up</button>\n\n  </form>\n\n  <hr class="hr" />\n\n  <p class="description">Already have an account? <a href="#" (click)="goLogin()">Log In</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/fullstack/customer/test-gopage/src/pages/page-signup-email/page-signup-email.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignupEmailPage);

//# sourceMappingURL=page-signup-email.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map