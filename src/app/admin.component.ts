import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   
import { StudentService } from './student.service';
import { SubjectService } from './subject.service';
import { Student } from './student';
import { Subject } from './subject';

import { AccountType } from './model/dropdown.model';
import { subjectDay } from './model/dropdown.model';
import { subUnit } from './model/dropdown.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  accounttypes: AccountType[];
  subjectdays: subjectDay[];
  subunits: subUnit[];

  adminview = true;
  adminAccount =true;
  adminSubject = false;

  message = false;
  upd = false;
  del = false;


  logout() {  
    console.log('logout');  
    this.studentService.logout();  
    this.router.navigate(['/login']);  
  }  

  adminAcc(){
    this.adminAccount = true;
    this.adminSubject = false;
  }
  adminSub(){
    this.adminAccount = false;
    this.adminSubject = true;
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

  private students:Student[];
  private studentName:String;
  private studentPassword:String;
  private studentAccounttype:String;

  private subjects:Subject[];
  private subjectName:String;
  private subjectDay:String;
  private subjectTime:String;
  private subjectRoom:String;
  private subjectUnit:String;

  public popoverTitle: string = 'Are you sure?';
	public confirmClicked: boolean = false;
	public cancelClicked: boolean = false;

  constructor(private studentService:StudentService,
    private subjectService:SubjectService , private router: Router) { }

  ngOnInit() {
    this.accounttypes  = [
      {id: 1, name: 'Admin'},
      {id: 2, name: 'Encoder'}
    ];

    this.subjectdays = [
      {id:  1, name: 'M_'},
      {id:  2, name: 'M_W_'},
      {id:  3, name: 'T_'},
      {id:  4, name: 'T_Th_'},
      {id:  5, name: 'W_'},
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

    this.getStudents();
    this.getSubjects();
  }
  getStudents(){
    this.studentService.getStudents()
      .subscribe((data) =>{
        this.students = data;
      }
      );
  }

  addStudent(){
    var student = new Student();
    student.name = this.studentName;
    student.password = this.studentPassword;
    student.accounttype = this.studentAccounttype;

    this.studentService.addStudent(student)
  .subscribe((data)=>{
    console.log(data);
    this.getStudents()
  });
  }

  deleteStudent(id){
	  this.studentService.deleteStudent(id)
	  .subscribe((data)=>{
		  console.log(data);
		  this.getStudents();
	  });
  }
  
  updateStudent(id){
    var student = new Student();
    student.name = this.studentName;
    student.password = this.studentPassword;
    student.accounttype = this.studentAccounttype;

    this.studentService.updateStudent(student, id)
  .subscribe((data)=>{
    console.log(data);
    this.getStudents()
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
