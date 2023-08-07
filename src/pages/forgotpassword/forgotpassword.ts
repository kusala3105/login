import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { LoginformPage } from '../loginform/loginform';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  result: string="";


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
    
  }
  async getlogin(email:any,pasw:any,confirm:any){
    const exp:RegExp= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const res:boolean=exp.test(email);
 
    if(res){
      if(pasw.length>8 && pasw.length<32){
        if(pasw==confirm){
          this.navCtrl.push(LoginformPage);
        }
        else{
          this.result="Enter same password";
        }
      }else{
        this.result="Enter valid password";
      }
    }else{
      this.result="Enter valid email"
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
  // public ionViewWillEnter() {
  //   this.viewCtrl.showBackButton(true);
  // }
}
