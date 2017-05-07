import Dexie from '../node_modules/dexie/dist/dexie';

export class myClassRoomAppDB extends Dexie{

  school : Dexie.Table<ISchool,number>
  course : Dexie.Table<ICourse,number>
  student : Dexie.Table<IStudent,number>
  assistance : Dexie.Table<IAssistance,number>



	constructor(){
    
      super("myClassRoomAppDB");

      this.version(1).stores({
        school:'++id,name,address,phone',
        course:'++id,grade,section,level,schoolId',
        student:'++id,name,surname,courseId',
        assistance:'++id,date,studentId,present'
      });

      this.school.mapToClass(School);
      this.course.mapToClass(Course);
      this.student.mapToClass(Student);
      this.assistance.mapToClass(Assistance);

  }
}

export interface ISchool{

  id?: number;
  name: string;
  address?: string;
  phone?: string;

}

export interface ICourse{

	id?: number;
	grade: number;
	section: string;
	level: string;
	schoolId:number;

}

export interface IStudent{

	id?:number;
	name:string;
	surname:string;
	courseId:number;

}

export interface IAssistance{

	id?:number;
	date:string;
	studentId:number;
	present:boolean;

}

/********************************************/
/***************** SCHOOL *******************/
/********************************************/

export class School implements ISchool{
  
  id?: number;
  name: string;
  address?: string;
  phone?: string;

  constructor(name : string,id ?: number,address ?: string,phone ?: string){
   
    this.name = name;
    if(id) this.id = id;
    if(address) this.address = address;
    if(phone) this.phone = phone;

  }

  save(){
  	return db.school.add(this);
  }

}

/********************************************/
/***************** COURSE *******************/
/********************************************/

export class Course implements ICourse{

	id?: number;
	grade: number;
	section: string;
	level: string;
	schoolId:number;

	constructor(grade : number,section : string, level: string, schoolId : number, id ?: number ){

		this.grade = grade;
		this.section = section;
		this.level = level;
		this.schoolId = schoolId;
		if(id) this.id = id;

	}

}


/********************************************/
/***************** STUDENT ******************/
/********************************************/

export class Student implements IStudent{
	
	id?:number;
	name:string;
	surname:string;
	courseId:number;

	constructor(name : string, surname : string, courseId : number, id ?: number){

		this.name = name;
		this.surname = surname;
		this.courseId = courseId;
		if(id) this.id = id;

	}

}

/********************************************/
/*************** ASSISTANCE *****************/
/********************************************/

export class Assistance implements IAssistance{

	id?:number;
	date:string;
	studentId:number;
	present:boolean;

	constructor(date : string, studentId : number, present : boolean, id ?: number){

		this.date = date;
		this.studentId = studentId;
		this.present = present;
		if(id) this.id = id;

	}

}

export let db = new myClassRoomAppDB();