import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { SliderPage } from '../pages/page-slider/page-slider';
import { UserFindDealsPage } from '../pages/page-user-find-deals/page-user-find-deals';
import { UserMembershipCardPage } from '../pages/page-user-membership-card/page-user-membership-card';
import { SignupMobilePage } from '../pages/page-signup-mobile/page-signup-mobile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('nav') nav: NavController;

  // make SliderPage the root (or first) page
   public rootPage: any = SliderPage;
  //public rootPage: any = UserFindDealsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public screenOrientation: ScreenOrientation
  ) {
    platform.ready().then(() => {
      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
    });

    this.initializeApp();

    // set our app's pages
    // this.pages = [
    //   { title: 'LOYALTY', component: UserMembershipCardPage }
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
