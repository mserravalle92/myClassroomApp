import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { School } from '../../database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

  	let school = new School('Lourdes');

  	school.save();

  }

}
