import { Injectable } from '@angular/core';
import { School } from '../database';

export const StorageKey = "schoolID";

/*
  Generated class for the SchoolService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SchoolService {
  

  constructor() {
  }

  getAll():any{

  	return School.getAll();
  
  }

  save( school : School ):any{

  	let schoolSavePromise = school.save();

  	return Promise.all([schoolSavePromise]);
  }

  setActiveID(schoolID){
    localStorage.setItem(StorageKey,schoolID);
  }
  
  getActiveID():number{

    return parseInt(localStorage.getItem(StorageKey));

  }

  getActiveSchool():any{
    return School.findByID(this.getActiveID());
  }

  activeEmpty():boolean{
    return !localStorage.getItem(StorageKey);
  }

  emptySchools():any{
   

    let empty = School.count().then((count)=>{
      var empty = true;

      if (count == 0) {
        empty = true;
        return empty;
      }
      else{
        empty = false;
        return empty;
      }
    });

    return empty;

  }

  getFirstSchool():any{
    return School.first();
  }

  createFirstSchool():any{
    let school : School = new School('Primera Escuela');

    return this.save(school);
  }

  validateEmptySchools(){
    this.emptySchools().then((result)=>{
      if(result){
        this.createFirstSchool().then((school)=>{
          this.setActiveID(school.id);
        });
      }else{
        this.getFirstSchool().then((school)=>{
          this.setActiveID(school.id);
        })
      }
    });
  }

}
