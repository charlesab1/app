import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string ="80";
  private headers = new HttpHeaders()
  .set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(
          this.url + "/student"
    );
  }
  addStudent(student):Observable<any>{
    return this.http.post<any>(
      this.url + "/student",
      student,
      {headers:this.headers}
);
  }
  deleteStudent(id: string){
	  return this.http.delete(this.url + '/student/' + id);
  }
  
  updateStudent(student: Student, id: string): Observable<Student>{
	  return this.http.put<Student>(
	  this.url + '/student/' + id, student, {headers:this.headers});
  }

}
