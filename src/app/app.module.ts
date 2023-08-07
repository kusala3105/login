import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginformPage } from '../pages/loginform/loginform';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MainpagePage } from '../pages/mainpage/mainpage';
import { DatapagePage } from '../pages/datapage/datapage';
import { AdminpagePage } from '../pages/adminpage/adminpage';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import { AdmininfoPage } from '../pages/admininfo/admininfo';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginformPage,
    SignupPage,
    ForgotpasswordPage,
    MainpagePage,
    DatapagePage,
    AdminpagePage,AdmininfoPage
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginformPage,
    SignupPage,
    ForgotpasswordPage,
    MainpagePage,
    DatapagePage,
    AdminpagePage,
    AdmininfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
