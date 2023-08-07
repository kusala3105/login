import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { MainpagePage } from '../mainpage/mainpage';
import { AdminpagePage } from '../adminpage/adminpage';


/**
 * Generated class for the LoginformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginform',
  templateUrl: 'loginform.html',
})
export class LoginformPage {
email1:any="kusala@gmail.com";
pasword:any="kusala123";
 details:{id:number,price:string,weight:string,display_type:string,brand:string,path:string}[]=[
   {
    id:0,
     price:'30,000',
     weight:'1.0 to 1.4 kg',
     display_type:'AMOLED',
     brand:'HP',
     path:'assets/images/0.png'
  },
   {
    id:1,
   price:'40,000',
   weight:'2.0 to 2.4 kg',
   display_type:'LED',
   brand:'Asus',
   path:'assets/images/1.png'
},
 {
  id:2,
 price:'80,000',
 weight:'upto 0.9kg',
 display_type:'OLED',
 brand:'Dell',
 path:'assets/images/2.png'
}, {
  id:3,
 price:'30,000',
 weight:'1.5 to 1.9 kg',
 display_type:'LCD',
 brand:'Lenovo',
 path:'assets/images/3.png'
},
 {
  id:4,
 price:'50,000',
 weight:'2.5kg & above',
 display_type:'LED',
 brand:'Acer',
 path:'assets/images/4.png'
}, {
  id:5,
 price:'70,000',
 weight:'1.0 to 1.4 kg',
 display_type:'LCD',
 brand:'LG',
 path:'assets/images/5.png'
}
];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginformPage');
  }
  forgot(){
    this.navCtrl.push(ForgotpasswordPage)
  }
  async check1(email:any,pasw:any){
    const exp:RegExp= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const res:boolean=exp.test(email);
    
    
   
    
    let exp1:boolean=false;
    if(pasw.length>8 && pasw.length<32){
      exp1 = true;
    }
   
    if(!res || !exp1){
      const alert1 = this.alertCtrl.create({
        title:"Alert",
        subTitle: "Note:",
        message: 'Required valid values',
        buttons: ['OK']
      });  
      (await alert1).present();

    }else{
      if(email==this.email1 && this.pasword==pasw){
        console.log(this.details);
        const detail=this.details;
       

          this.navCtrl.push(AdminpagePage,{detail});
      }else{

        this.navCtrl.push( MainpagePage);
      }
     }
    

   
  }
  
}
