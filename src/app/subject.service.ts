import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from './subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url:string ="80";
  private headers = new HttpHeaders()
  .set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  getSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(
          this.url + "/subject"
    );
  }
  addSubject(subject):Observable<any>{
    return this.http.post<any>(
      this.url + "/subject",
      subject,
      {headers:this.headers}
);
  }
  deleteSubject(id: string){
	  return this.http.delete(this.url + '/subject/' + id);
  }
  
  updateSubject(subject: Subject, id: string): Observable<Subject>{
	  return this.http.put<Subject>(
	  this.url + '/subject/' + id, subject, {headers:this.headers});
  }

}
