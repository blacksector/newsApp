import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ModalController} from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stories: any;
  sections: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ApiProvider, private storage: Storage,
    public modalCtrl: ModalController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {


    this.getTopStories('home.json');

  }

  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    })
  }


  createLoading(message: string) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: message
    });
    return loading;
  }

  getTopStories(filter: string) {
    // Grabs stories based on a provided filter

    this.api.get(filter).subscribe(res => {
      this.stories = res.json()['results'];
      this.processSections();
      this.createToast('Success').present();
    }, err => {
      this.createToast('Error: ' + err).present();
    });
  }

  processSections() {
    // This function simply makes a list of all the "sections" or "categories"
    // and the number of stories/news reports related to it and stores it in
    // an object for display, now contains the array and position(s) co-relating
    // to the stories object.
    var inSection = false;
    var sectionIndex = 0;
    for (var i = 0; i < this.stories.length; i++) {
      if (this.sections.length == 0) {
        this.sections.push({"title": this.stories[i]["section"],
        "count": 1,
        "background": this.getRandomNumber(),
        "indexs": [i]});
      } else {
        for (var x = 0; x < this.sections.length; x++) {
          if (this.sections[x].title == this.stories[i]["section"]) {
            inSection = true;
            sectionIndex = x;
          }
        }
        if (inSection) {
          this.sections[sectionIndex]["count"] += 1;
          this.sections[sectionIndex]["indexs"].push(i);
        } else {
          this.sections.push({"title": this.stories[i]["section"],
          "count": 1,
          "background": this.getRandomNumber(),
          "indexs": [i]});
        }

      }


      inSection = false;
      sectionIndex = 0;

      // if (this.sections.indexOf(this.stories[i]["section"]) === -1) {
      //   this.sections.push(this.stories[i]["section"]);
      // }

    }

    for (var j = 0; j < this.sections.length; j++) {
      console.log(this.sections[j].title + ": " + this.sections[j].indexs);
    }

  }

  getRandomNumber() {
    // This function is used to get a random background for
    // the news sections on the home page
    return (Math.floor((Math.random()*10000)+1) % 14) + 1;
  }

  clickStories(section: any) {
    this.createToast('Section: ' + section.title).present();
  }

  showStories(section: any) {
    //console.log(section.title);
    this.modalCtrl.create('StoriesPage', {"stories": this.stories, "section": section }).present();
  }

  showFilters() {
    this.modalCtrl.create('SettingsPage').present();
  }


}
