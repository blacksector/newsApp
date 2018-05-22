import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story-detail',
  templateUrl: 'story-detail.html',
})
export class StoryDetailPage {

  story: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.story = this.navParams.get('storyData');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryDetailPage');
  }

}
