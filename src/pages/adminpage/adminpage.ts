import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdmininfoPage } from '../admininfo/admininfo';

/**
 * Generated class for the AdminpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpage',
  templateUrl: 'adminpage.html',
})
export class AdminpagePage {
  details1:any=[];
  page = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
    this.details1=navParams.get('detail');
    console.log("dataaa",this.details1);
   
  }
  pageChanged(page) {
    this.page = page;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpagePage');
  }

  gettoknow(path:any,id:any){
    let d:any;
    let k=Object.keys(this.details1);
    for(let i=0;i<k.length;i++){
      if(k[i]==id){
        d=this.details1[i]
      }
    }
    console.log("data1",d)

    this.navCtrl.push(AdmininfoPage,{d});

  }
}
