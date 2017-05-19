import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { School } from '../../database';
import { SchoolService } from '../../providers/school-service';

/**
 * Generated class for the AddSchool page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-school',
  templateUrl: 'add-school.html',
})
export class AddSchool {

	school: School = new School ('');

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public schoolService : SchoolService,
   ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSchool');
  }

  saveSchool(){

  	this.schoolService.save(this.school).then(

  		result=>{
        this.school = this.cleanSchool();
        this.navCtrl.pop();
  
  });


}
 cleanSchool(){
  	let school : School = new School('');
  	school.address = '';
  	school.phone = '';

  	return school;
  }

}