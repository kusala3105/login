import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginformPage } from '../loginform/loginform';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
result:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  async register(email:any,pasw:any,confirm:any,mobile:any){
  const exp:RegExp= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const exp1:RegExp=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if(exp.test(email)){
    if(pasw.length>8 && pasw.length<32){
        if(pasw==confirm){
          if(exp1.test(mobile)){
            this.navCtrl.push(LoginformPage);
          }
          else{
            this.result="enter valid mobile number"
          }
        }else{
          this.result="Enter same password"
        }
    }else{
      this.result="Enter valid password";
    }
  }else{
    this.result="Enter valid mail";
  }
  if(this.result.length>2){
    const alert1 = this.alertCtrl.create({
      title:"Alert",
      subTitle: "Note:",
      message: this.result,
      buttons: ['OK']
    });  
    (await alert1).present();
  }
 
  

 
   
  
}
}