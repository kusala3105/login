import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginformPage } from '../loginform/loginform';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    /**
     * name
     */
   
  }
  public login(){
    console.log("hi");
    this.navCtrl.push(LoginformPage);

  }
  public signup(){
    this.navCtrl.push(SignupPage)
  }

}


