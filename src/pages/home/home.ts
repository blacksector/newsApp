import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,
  LoadingController, ModalController, AlertController} from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stories: any = [];
  sections: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: ApiProvider, private storage: Storage,
    public modalCtrl: ModalController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {




    this.getStories();


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

  getStories(newFilter? : any) {
    if (newFilter) {
      this.getStoriesApi(newFilter);
    } else {
      this.storage.get('filter').then((val) => {
        if (val != null && val != undefined && val != false) {
          // Filter does exist:
          this.getStoriesApi(val);
        } else {
          this.getStoriesApi('home.json');
          this.storage.set('filter', 'home.json');
        }
      });
    }
  }

  getStoriesApi(filter: string) {
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

    this.sections = [];

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
    //this.modalCtrl.create('SettingsPage').present();

    let alert = this.alertCtrl.create();
    alert.setTitle('Filter');

    alert.addInput({
      type: 'radio',
      label: 'All',
      value: 'home.json',
      checked: true
    });

    // arts
    alert.addInput({
      type: 'radio',
      label: 'Arts',
      value: 'arts.json',
      checked: false
    });

    // automobiles
    alert.addInput({
      type: 'radio',
      label: 'Automobiles',
      value: 'automobiles.json',
      checked: false
    });
    // books
    alert.addInput({
      type: 'radio',
      label: 'Books',
      value: 'books.json',
      checked: false
    });
    // business
    alert.addInput({
      type: 'radio',
      label: 'Business',
      value: 'business.json',
      checked: false
    });
    // fashion
    alert.addInput({
      type: 'radio',
      label: 'Fashion',
      value: 'fashion.json',
      checked: false
    });
    // food
    alert.addInput({
      type: 'radio',
      label: 'Food',
      value: 'food.json',
      checked: false
    });
    // health
    alert.addInput({
      type: 'radio',
      label: 'Health',
      value: 'health.json',
      checked: false
    });
    // insider
    alert.addInput({
      type: 'radio',
      label: 'Insider',
      value: 'insider.json',
      checked: false
    });
    // magazine
    alert.addInput({
      type: 'radio',
      label: 'Arts',
      value: 'arts.json',
      checked: false
    });
    // movies
    alert.addInput({
      type: 'radio',
      label: 'Movies',
      value: 'movies.json',
      checked: false
    });
    // national
    alert.addInput({
      type: 'radio',
      label: 'National',
      value: 'national.json',
      checked: false
    });
    // nyregion
    alert.addInput({
      type: 'radio',
      label: 'New York Region',
      value: 'nyregion.json',
      checked: false
    });
    // obituaries
    alert.addInput({
      type: 'radio',
      label: 'Obituaries',
      value: 'obituaries.json',
      checked: false
    });
    // opinion
    alert.addInput({
      type: 'radio',
      label: 'Opinion',
      value: 'opinion.json',
      checked: false
    });
    // politics
    alert.addInput({
      type: 'radio',
      label: 'Politics',
      value: 'politics.json',
      checked: false
    });
    // realestate
    alert.addInput({
      type: 'radio',
      label: 'Real Estate',
      value: 'realestate.json',
      checked: false
    });
    // science
    alert.addInput({
      type: 'radio',
      label: 'Science',
      value: 'science.json',
      checked: false
    });
    // sports
    alert.addInput({
      type: 'radio',
      label: 'Sports',
      value: 'sports.json',
      checked: false
    });
    // sundayreview
    alert.addInput({
      type: 'radio',
      label: 'Sunday Review',
      value: 'sundayreview.json',
      checked: false
    });
    // technology
    alert.addInput({
      type: 'radio',
      label: 'Technology',
      value: 'technology.json',
      checked: false
    });
    // theater
    alert.addInput({
      type: 'radio',
      label: 'Theater',
      value: 'theater.json',
      checked: false
    });
    // tmagazine
    alert.addInput({
      type: 'radio',
      label: 'T Magazine',
      value: 'tmagazine.json',
      checked: false
    });
    // travel
    alert.addInput({
      type: 'radio',
      label: 'Travel',
      value: 'travel.json',
      checked: false
    });
    // upshot
    alert.addInput({
      type: 'radio',
      label: 'Upshot',
      value: 'upshot.json',
      checked: false
    });
    // world
    alert.addInput({
      type: 'radio',
      label: 'World',
      value: 'world.json',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.storage.set('filter', data);
        this.getStories(data);
      }
    });
    alert.present();

  }


}
