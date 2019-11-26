import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url:string ="80";
  private headers = new HttpHeaders()
  .set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  getRegisters():Observable<Register[]>{
    return this.http.get<Register[]>(
          this.url + "/register"
    );
  }
  addRegister(register):Observable<any>{
    return this.http.post<any>(
      this.url + "/register",
      register,
      {headers:this.headers}
);
  }
  deleteRegister(id: string){
	  return this.http.delete(this.url + '/register/' + id);
  }
  
  updateRegister(register: Register, id: string): Observable<Register>{
	  return this.http.put<Register>(
	  this.url + '/register/' + id, register, {headers:this.headers});
  }

}
