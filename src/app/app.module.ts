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
import { SignupSuccessPage } from '../pages/page-signup-success/page-signup-success';
import { MenuPage } from '../pages/page-menu/page-menu';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { UserScannerPage } from '../pages/page-user-scanner/page-user-scanner';
import { UserRegisterPage } from '../pages/page-user-register/page-user-register';
import { UserCustomersPage } from '../pages/page-user-customers/page-user-customers';
import { UserInboxPage } from '../pages/page-user-inbox/page-user-inbox';
import { UserFavoritesPage } from '../pages/page-user-favorites/page-user-favorites';
import { UserDealsPage } from '../pages/page-user-deals/page-user-deals';
import { UserDealsDetailsPage } from '../pages/page-user-deals-details/page-user-deals-details';
import { UserCardPage } from '../pages/page-user-card/page-user-card';
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
    SignupSuccessPage,
    MenuPage,
    ItemDetailsPage,
    UserScannerPage,
    UserRegisterPage,
    UserCustomersPage,
    UserInboxPage,
    UserFavoritesPage,
    UserDealsPage,
    UserDealsDetailsPage,
    UserCardPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
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
    SignupSuccessPage,
    MenuPage,
    ItemDetailsPage,
    UserScannerPage,
    UserRegisterPage,
    UserCustomersPage,
    UserInboxPage,
    UserFavoritesPage,
    UserDealsPage,
    UserDealsDetailsPage,
    UserCardPage,
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
