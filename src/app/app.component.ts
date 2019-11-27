import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Student } from './student';
import { StudentService } from './student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Encoder } from './encoder'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms';
  hidelog = true;
  encoderview = false;

  model: Student = { id: 0, name: "admin", password: "admin", accounttype: "Admin"}
  model1: Encoder = { id: 1, name: "encoder", password: "encoder", accounttype: "Encoder"}
       loginForm: FormGroup;  
       message: string;  
       returnUrl: string;
       returnencoder: string;
 

       constructor(  
        private formBuilder: FormBuilder,  
        private router: Router,  
        private authService: StudentService  
     ) { } 

     ngOnInit() {  
      this.loginForm = this.formBuilder.group({  
         username: ['', Validators.required],  
         password: ['', Validators.required]  
      });  

   this.returnencoder = '/encoder';
   this.returnUrl = '/admin';  
   this.authService.logout();  
   }  
  
// convenience getter for easy access to form fields  
get f() { return this.loginForm.controls; }  
  
  
login() {  

   // stop here if form is invalid  
   if (this.loginForm.invalid) {  
      return;  
   }  
   else {  
      if (this.f.username.value == this.model.name && this.f.password.value == this.model.password) {  
      console.log("Login successful");  
      //this.authService.authLogin(this.model);
      this.hidelog = false; 
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', this.f.username.value);  
      this.router.navigate([this.returnUrl]);  
      }
      
      else if (this.f.username.value == this.model1.name && this.f.password.value == this.model1.password) {  
         console.log("Login successful");  
         //this.authService.authLogin(this.model);
         this.hidelog = false; 
         this.encoderview = true;
         localStorage.setItem('isLoggedIn', "true");  
         localStorage.setItem('token', this.model1.accounttype);  
         this.router.navigate([this.returnencoder]);  
         }
   else {  
      this.message = "Please check your username and password";  
      }  1
     }  
  }  
  
}

