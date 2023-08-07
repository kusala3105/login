import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmininfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admininfo',
  templateUrl: 'admininfo.html',
})
export class AdmininfoPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get('d');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmininfoPage');
  }

}
