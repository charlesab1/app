import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { StudentService } from './student.service';
import { RegisterService } from './register.service';
import { Subject } from './subject';
import { Register } from './register';
import { Router } from '@angular/router';
import { AccountType } from './model/dropdown.model';
import { subjectDay } from './model/dropdown.model';
import { subUnit } from './model/dropdown.model';
import { studType } from './model/dropdown.model';
import { studStatus } from './model/dropdown.model';
import { yrsec } from './model/yrsec';
import { course } from './model/course';
import { college } from './model/college';
import { gender } from './model/gender';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent implements OnInit {

  subjectdays: subjectDay[];
  subunits: subUnit[];
  studtypes: studType[];
  stats: studStatus[];
  yrsecs: yrsec[];
  courses: course[];
  colleges: college[];
  genders: gender[];

  encoderview = true;
  encoderAccountEdit = true;
  encoderSubject = false;
  message = false;
  upd = false;
  del = false;

  logout() {  
    console.log('logout');  
    this.studentService.logout();  
    this.router.navigate(['/login']);  
  } 
  encoderSub(){
    this.encoderSubject = true;
    this.encoderAccountEdit = false;
  }
  encoderAccad(){
    this.encoderSubject = false;
    this.encoderAccountEdit = true;
  }
  encoderShow(){
    this.encoderview = false;
    this.encoderSubject = false;
    this.encoderAccountEdit = false;
  }

  toggleShow(){
    this.message = true;
    this.upd = false;
    this.del = false;
  }
  toggleup(){
    this.message = false;
    this.upd = true;
    this.del = false;
  }
  toggled(){
    this.message = false;
    this.upd = false;
    this.del = true;
  }

  private subjects:Subject[];
  private subjectName:String;
  private subjectDay:String;
  private subjectTime:String;
  private subjectRoom:String;
  private subjectUnit:String;

  private registers:Register[];
  private registerStud_id:String;
  private registerStud_type:String;
  private registerName:String;
  private registerStatus:String;
  private registerCollege:String;
  private registerCourse:String;
  private registerYr_section:String;
  private registerAge:String;
  private registerGender:String;
  private registerSubjectcode:String;
  private registerDay:String;
  private registerTime:String;
  private registerRoom:String;
  private registerUnit:String;

  private registerSubjectcode1:String; private registerDay1:String; private registerTime1:String; private registerRoom1:String; private registerUnit1:String;
  private registerSubjectcode2:String; private registerDay2:String; private registerTime2:String; private registerRoom2:String; private registerUnit2:String;
  private registerSubjectcode3:String; private registerDay3:String; private registerTime3:String; private registerRoom3:String; private registerUnit3:String;
  private registerSubjectcode4:String; private registerDay4:String; private registerTime4:String; private registerRoom4:String; private registerUnit4:String;

  public popoverTitle: string = 'Are you sure?';
	public confirmClicked: boolean = false;
	public cancelClicked: boolean = false;



  constructor(private subjectService:SubjectService, private registerService:RegisterService, private studentService: StudentService, private router: Router) { }

  ngOnInit() {

    this.subjectdays = [
      {id:  1, name: 'M_'},
      {id:  2, name: 'M_W_'},
      {id:  3, name: 'T_'},
      {id:  4, name: 'T_Th_'},
      {id:  5, name: 'W)'},
      {id:  6, name: 'W_F_'},
      {id:  7, name: 'F_'},
      {id:  8, name: 'S_'}
    ];

    this.subunits = [
      {id: 1, num: 11},
      {id: 2, num: 12},
      {id: 3, num: 13},
      {id: 4, num: 14},
      {id: 5, num: 15},
      {id: 6, num: 16},
      {id: 7, num: 17},
      {id: 8, num: 18},
      {id: 9, num: 19},
      {id: 10, num: 20}
    ];

    this.studtypes = [
      {id: 1, name: 'New'},
      {id: 2, name: 'Old'},
      {id: 3, name: 'Returnee'},
      {id: 4, name: 'Transferee'},

    ];

    this.stats = [
      {id: 1, name: 'Regular'},
      {id: 2, name: 'Irregular'},
      {id: 3, name: 'Warning'},
      {id: 4, name: 'Probation'},
      {id: 5, name: 'Dismissed'}
    ];

  this.yrsecs = [
    {id: 1, name: '1-1'},
    {id: 2, name: '1-2'},
    {id: 3, name: '1-3'},
    {id: 4, name: '1-4'},
    {id: 5, name: '1-5'},
    {id: 6, name: '2-1'},
    {id: 7, name: '2-2'},
    {id: 8, name: '2-3'},
    {id: 9, name: '2-4'},
    {id: 10, name: '2-5'},
    {id: 11, name: '3-1'},
    {id: 12, name: '3-2'},
    {id: 13, name: '3-3'},
    {id: 14, name: '3-4'},
    {id: 15, name: '3-5'},
    {id: 16, name: '4-1'},
    {id: 17, name: '4-2'},
    {id: 18, name: '4-3'},
    {id: 19, name: '4-4'},
    {id: 20, name: '4-5'},
    {id: 21, name: '5-1'},
    {id: 22, name: '5-2'},
    {id: 23, name: '5-3'},
    {id: 24, name: '5-4'},
    {id: 25, name: '5-5'}
  ];

  this.courses = [
    {id: 1, name: 'BSIT'},
    {id: 2, name: 'BSABE'},
    {id: 3, name: 'BSCE'},
    {id: 4, name: 'BSAgEn'}
  ];

  this.colleges = [
    {id: 1, name: 'CBAA'},
    {id: 2, name: 'CAg'},
    {id: 3, name: 'CEn'},
    {id: 4, name: 'CHSI'},
    {id: 5, name: 'CF'},
    {id: 6, name: 'CAS'},
    {id: 7, name: 'CED'}
  ];

  this.genders = [
    {id: 1, name: 'Female'},
    {id: 2, name: 'Male'}
  ];



    this.getSubjects();
    this.getRegisters();
  }

  getRegisters(){
    this.registerService.getRegisters()
      .subscribe((data) =>{
        this.registers = data;
      }
      );
  }
  addRegister(){
    var register = new Register();
    register.stud_id = this.registerStud_id;
    register.stud_type = this.registerStud_type;
    register.name = this.registerName;
    register.status = this.registerStatus;
    register.college = this.registerCollege;
    register.course = this.registerCourse;
    register.yr_section = this.registerYr_section;
    register.age = this.registerAge;
    register.gender = this.registerGender;
    register.subjectcode = this.registerSubjectcode;
    register.day = this.registerDay;
    register.time = this.registerTime;
    register.room = this.registerRoom;
    register.unit = this.registerUnit;
    register.subjectcode1 = this.registerSubjectcode1; register.day1 = this.registerDay1; register.time1 = this.registerTime1; register.room1 = this.registerRoom1; register.unit1 = this.registerUnit1;
    register.subjectcode2 = this.registerSubjectcode2; register.day2 = this.registerDay2; register.time2 = this.registerTime2; register.room2 = this.registerRoom2; register.unit2 = this.registerUnit2;
    register.subjectcode3 = this.registerSubjectcode3; register.day3 = this.registerDay3; register.time3 = this.registerTime3; register.room3 = this.registerRoom3; register.unit3 = this.registerUnit3;
    register.subjectcode4 = this.registerSubjectcode4; register.day4 = this.registerDay4; register.time4 = this.registerTime4; register.room4 = this.registerRoom4; register.unit4 = this.registerUnit4;

    this.registerService.addRegister(register)
  .subscribe((data)=>{
    console.log(data);
    this.getRegisters()
  });
  }

  deleteRegister(id){
	  this.registerService.deleteRegister(id)
	  .subscribe((data)=>{
		  console.log(data);
		  this.getRegisters();
	  });
  }

  updateRegister(id){
    var register = new Register();
    register.stud_id = this.registerStud_id;
    register.stud_type = this.registerStud_type;
    register.name = this.registerName;
    register.status = this.registerStatus;
    register.college = this.registerCollege;
    register.course = this.registerCourse;
    register.yr_section = this.registerYr_section;
    register.age = this.registerAge;
    register.gender = this.registerGender;
    register.subjectcode = this.registerSubjectcode;
    register.day = this.registerDay;
    register.time = this.registerTime;
    register.room = this.registerRoom;
    register.unit = this.registerUnit;
    register.subjectcode1 = this.registerSubjectcode1; register.day1 = this.registerDay1; register.time1 = this.registerTime1; register.room1 = this.registerRoom1; register.unit1 = this.registerUnit1;
    register.subjectcode2 = this.registerSubjectcode2; register.day2 = this.registerDay2; register.time2 = this.registerTime2; register.room2 = this.registerRoom2; register.unit2 = this.registerUnit2;
    register.subjectcode3 = this.registerSubjectcode3; register.day3 = this.registerDay3; register.time3 = this.registerTime3; register.room3 = this.registerRoom3; register.unit3 = this.registerUnit3;
    register.subjectcode4 = this.registerSubjectcode4; register.day4 = this.registerDay4; register.time4 = this.registerTime4; register.room4 = this.registerRoom4; register.unit4 = this.registerUnit4;

    this.registerService.updateRegister(register, id)
  .subscribe((data)=>{
    console.log(data);
    this.getRegisters()
  });
  }






  getSubjects(){
    this.subjectService.getSubjects()
      .subscribe((data) =>{
        this.subjects = data;
      }
      );
  }

  addSubject(){
    var subject = new Subject();
    subject.subjectname = this.subjectName;
    subject.day = this.subjectDay;
    subject.time = this.subjectTime;
    subject.room = this.subjectRoom;
    subject.unit = this.subjectUnit;

    this.subjectService.addSubject(subject)
  .subscribe((data)=>{
    console.log(data);
    this.getSubjects()
  });
  }

  deleteSubject(id){
	  this.subjectService.deleteSubject(id)
	  .subscribe((data)=>{
		  console.log(data);
		  this.getSubjects();
	  });
  }

  updateSubject(id){
    var subject = new Subject();
    subject.subjectname = this.subjectName;
    subject.day = this.subjectDay;
    subject.time = this.subjectTime;
    subject.room = this.subjectRoom;
    subject.unit = this.subjectUnit;

    this.subjectService.updateSubject(subject, id)
  .subscribe((data)=>{
    console.log(data);
    this.getSubjects()
  });
  }

}
