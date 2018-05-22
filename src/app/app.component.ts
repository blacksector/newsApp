import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  stories: any = [];

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();

      //this.localNotificationConfig();

      // this.getTopStories();


    });
  }


  // localNotificationConfig() {
  //   this.localNotifications.setDefaults({
  //     led: { color: '#FF00FF', on: 1000, off: 1000 },
  //     vibrate: false
  //   });
  // }

  // startNotifications(id) {
  //
  //
  //   //let randomStory = Math.floor((Math.random() * this.stories.length) + 1);
  //
  //   this.localNotifications.schedule({
  //     id: id,
  //     title: this.stories[0],
  //     text: this.stories[0],
  //     every: 'minute',
  //     sound: null,
  //     data: { id: 1, title: "HEADLINE" }
  //   });
  //
  //   this.stories.splice(0, 1);
  //
  // }



}
