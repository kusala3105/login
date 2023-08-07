import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmininfoPage } from './admininfo';

@NgModule({
  declarations: [
    AdmininfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmininfoPage),
  ],
})
export class AdmininfoPageModule {}
