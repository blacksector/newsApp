import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  stories: any;
  section: any;
  shownStories: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private iab: InAppBrowser) {

    this.section = this.navParams.get('section');
    this.stories = this.navParams.get('stories');

    for (var i = 0; i < this.section.indexs.length; i++) {
      this.shownStories.push(this.stories[this.section.indexs[i]]);
      console.log(this.stories[this.section.indexs[i]]);
    }

  }

  storyDetails(story: any) {
    // Seems the NYT API doesn't give us the full story, so I guess we'll
    // just load up their website and show it inside of an inappbrowser instead:
    const browser = this.iab.create(story.url);
    //this.modalCtrl.create('StoryDetailPage', {storyData: story}).present();
  }


}
