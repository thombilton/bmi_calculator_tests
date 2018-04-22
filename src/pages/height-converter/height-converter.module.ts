import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeightConverterPage } from './height-converter';

@NgModule({
  declarations: [
    HeightConverterPage,
  ],
  imports: [
    IonicPageModule.forChild(HeightConverterPage),
  ],
})
export class HeightConverterPageModule {}
