import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddSchool } from '../add-school/add-school';
import { SchoolService } from '../../providers/school-service';
import { School } from '../../database';
/**
 * Generated class for the Schools page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class Schools {
	activeSchool : School = new School(''); //cambiar por el service de escuela activa
	addSchoolPage = AddSchool;
	schools :any;

  constructor(public navCtrl: NavController,
  			 		  public navParams: NavParams,
  			 		  public schoolService: SchoolService,
  			 		  ) {
  }

  ionViewDidLoad() {
    this.schoolService.validateEmptySchools();
    this.loadActiveSchool();
    this.loadSchools();
  }

  ionViewWillEnter() {
    this.loadActiveSchool();
    this.loadSchools();

  }

  loadSchools(){
  	 this.schoolService.getAll().then(
    	(results)=>{
    		this.schools = results;
    	});

  }

  loadActiveSchool(){
    this.schoolService.getActiveSchool().then((result)=>{
       this.activeSchool = result;
    });
  }

  setActiveSchool(schoolID:number){
    this.schoolService.setActiveID(schoolID);
    this.loadActiveSchool();
 }

}
