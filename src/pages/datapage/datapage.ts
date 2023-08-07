import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatapagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datapage',
  templateUrl: 'datapage.html',
})
export class DatapagePage {

  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
   // console.log('data', this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatapagePage');
  }

}
