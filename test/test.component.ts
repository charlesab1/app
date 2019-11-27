import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { StudentService } from '../student.service';
import {IStudent} from '../student';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // public name = "Abbie";
  // public successClass = "text-special";
  // public textSuccessClass = "text-success";
  // public textDangerClass = "text-danger";
  // public hasError = true;
  // public isSpecial = true;
  // public messageClasses = {
  //   'text-success':!this.hasError,
  //   'text-danger':this.hasError,
  //   'text-special':this.isSpecial
  // }


  public students: IStudent[];
  public student_name: string ;
  public student_age: number ;

  constructor(
    private _userService: UserService,  
    // tslint:disable-next-line: variable-name
    private _studentSevice: StudentService) { }


  ngOnInit() {
    this.getStudent(); //= this._studentSevice.getStudent();
  }
  getStudent() {
    this._studentSevice.getStudent().subscribe((data) => {
      this.students = data;
    });
  }
  addStudent() {
    const student: IStudent = {
      name: this.student_name,
      age: this.student_age
    }
    this._studentSevice.addStudent(student).subscribe((data) => {
      console.log();
      this.getStudent();
    });
  }
  log(log) {
    console.log(log);
  }
}
