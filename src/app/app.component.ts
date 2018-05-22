import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocalNotifications } from '@ionic-native/local-notifications';

import { ApiProvider } from '../providers/api/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  stories: any = [];

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private localNotifications: LocalNotifications,
    public api: ApiProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.localNotificationConfig();

      this.getTopStories();


    });
  }


  localNotificationConfig() {
    this.localNotifications.setDefaults({
      led: { color: '#FF00FF', on: 1000, off: 1000 },
      vibrate: false
    });
  }

  startNotifications(id) {


    //let randomStory = Math.floor((Math.random() * this.stories.length) + 1);

    this.localNotifications.schedule({
      id: id,
      title: this.stories[0],
      text: this.stories[0],
      every: 'minute',
      sound: null,
      data: { id: 1, title: "HEADLINE" }
    });

    this.stories.splice(0, 1);

  }

  getTopStories() {
    let key = '4b4d9e491bba4b428219d908b7eb94fc';

    var api = this.api;

    api.get('home.json').subscribe(res => {
      this.stories = res.json()['results'];
      this.startNotifications(1);
    }, err => {

      console.log(err);

    });


  }

}
