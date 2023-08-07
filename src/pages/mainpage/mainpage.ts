import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatapagePage } from '../datapage/datapage';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {
  images1: any = []
  obj1:any={
   0: {
      price:'30,000',
      weight:'1.0 to 1.4 kg',
      display_type:'LED',
      brand:'HP',
      path:'assets/images/0.png'
   },
   1: {
    price:'30,000',
    weight:'1.0 to 1.4 kg',
    display_type:'LED',
    brand:'HP',
    path:'assets/images/1.png'
 },
 2: {
  price:'30,000',
  weight:'1.0 to 1.4 kg',
  display_type:'LED',
  brand:'HP',
  path:'assets/images/2.png'
},
3: {
  price:'30,000',
  weight:'1.0 to 1.4 kg',
  display_type:'LED',
  brand:'HP',
  path:'assets/images/3.png'
},
4: {
  price:'30,000',
  weight:'1.0 to 1.4 kg',
  display_type:'LED',
  brand:'HP',
  path:'assets/images/4.png'
},
5: {
  price:'30,000',
  weight:'1.0 to 1.4 kg',
  display_type:'LED',
  brand:'HP',
  path:'assets/images/5.png'
}

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.obj1)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
    for(let i=0;i<6;i++){
      this.images1.push(i);
      console.log('hiii', this.images1);
    }
  }
  method1(id:any){
    let data:any= {};
    var keys=Object.keys(this.obj1);
   for(var num of keys){

      if(num == id){
        console.log('obj', this.obj1);
        data = this.obj1[id];
       
        this.navCtrl.push(DatapagePage,{data});

      }
    }
    // Object.keys.forEach((res) => {
    //   console.log('ressss', res);
    //   if(res === id) {
    //     data = res;
    //   }
    // })
  }


 

}
