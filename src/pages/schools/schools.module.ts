import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Schools } from './schools';

@NgModule({
  declarations: [
    Schools,
  ],
  imports: [
    IonicPageModule.forChild(Schools),
  ],
  exports: [
    Schools
  ]
})
export class SchoolsModule {}
