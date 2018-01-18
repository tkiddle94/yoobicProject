import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openFilters() {
    console.log(this.password)
    if(this.username == '') {
     this.presentAlert('Could not Login, please enter your username.');
    }
    else if(this.password == '') {
      this.presentAlert('Could not Login, please enter your password.');
    }
    else {
      this.navCtrl.setRoot(HomePage)
  
    }
  }

  presentAlert(text : string) {
    let alert = this.alertCtrl.create({
      title: 'Sorry',
      subTitle: text,
      buttons: ['Okay']
    });
    alert.present();
  }
}
