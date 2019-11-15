import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as algoliasearch from 'algoliasearch/lite';
import * as firebase from 'firebase/app';

const searchClient = algoliasearch(
  "7GFRW953SC",
    "88f1f4f330ae7f11a0bf2a0c0fd60c2c"
);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  config = {
    indexName: 'events',
    searchClient
  };

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyAwBdkudhjqKNgGEYZ5ko32Pcq2qF6dqIo",
    authDomain: "eventorganizer-18d17.firebaseapp.com",
    databaseURL: "https://eventorganizer-18d17.firebaseio.com/",
    projectId: "eventorganizer-18d17",
    storageBucket: "eventorganizer-18d17.appspot.com",
    messagingSenderId: "299041028838"

    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}
