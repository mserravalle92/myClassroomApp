import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSchool } from './add-school';

@NgModule({
  declarations: [
    AddSchool,
  ],
  imports: [
    IonicPageModule.forChild(AddSchool),
  ],
  exports: [
    AddSchool
  ]
})
export class AddSchoolModule {}
