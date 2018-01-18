import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public title : String;
  public image : String;
  public overview : String;
  public releaseDate : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   console.log(this.navParams.get('overview'));
   this.title = this.navParams.get('title');
   this.image = this.navParams.get('image');
   this.overview = this.navParams.get('overview');
   this.releaseDate = this.navParams.get('releaseDate')
  }

}
