import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { SliderPage } from '../pages/page-slider/page-slider';
import { LoginPage } from '../pages/page-login/page-login';
import { ResetPassPage } from '../pages/page-reset-pass/page-reset-pass';
import { ResetPassSuccessPage } from '../pages/page-reset-pass-success/page-reset-pass-success';
import { SignupPage } from '../pages/page-signup/page-signup';
import { SignupEmailPage } from '../pages/page-signup-email/page-signup-email';
import { SignupMobilePage } from '../pages/page-signup-mobile/page-signup-mobile';
import { SignupSuccessPage } from '../pages/page-signup-success/page-signup-success';
import { SignupMobileSuccessPage } from '../pages/page-signup-mobile-success/page-signup-mobile-success';
import { MenuPage } from '../pages/page-menu/page-menu';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { UserMembershipCardPage } from '../pages/page-user-membership-card/page-user-membership-card';
import { UserLoyaltyCardsPage } from '../pages/page-user-loyalty-cards/page-user-loyalty-cards';
import { UserFindDealsPage } from '../pages/page-user-find-deals/page-user-find-deals';
import { UserFavoritesPage } from '../pages/page-user-favorites/page-user-favorites';
import { UserInboxPage } from '../pages/page-user-inbox/page-user-inbox';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ApiService } from '../service/api.service.component';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    SliderPage,
    LoginPage,
    ResetPassPage,
    ResetPassSuccessPage,
    SignupPage,
    SignupEmailPage,
    SignupMobilePage,
    SignupSuccessPage,
    SignupMobileSuccessPage,
    MenuPage,
    ItemDetailsPage,
    UserMembershipCardPage,
    UserLoyaltyCardsPage,
    UserFavoritesPage,
    UserFindDealsPage,
    UserInboxPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SliderPage,
    LoginPage,
    ResetPassPage,
    ResetPassSuccessPage,
    SignupPage,
    SignupEmailPage,
    SignupMobilePage,
    SignupSuccessPage,
    SignupMobileSuccessPage,
    MenuPage,
    ItemDetailsPage,
    UserMembershipCardPage,
    UserLoyaltyCardsPage,
    UserFavoritesPage,
    UserFindDealsPage,
    UserInboxPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation,
    Facebook,
    GooglePlus,
    BarcodeScanner,
    ApiService
  ]
})
export class AppModule {}
