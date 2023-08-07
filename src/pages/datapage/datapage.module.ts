import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatapagePage } from './datapage';

@NgModule({
  declarations: [
    DatapagePage,
  ],
  imports: [
    IonicPageModule.forChild(DatapagePage),
  ],
})
export class DatapagePageModule {}
