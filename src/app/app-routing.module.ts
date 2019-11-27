import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { AdminComponent } from './admin.component';
import {EncoderComponent } from './encoder.component'
import { AuthGuard } from './guards/auth.guard'; 
import { from } from 'rxjs';
  
const routes: Routes = [  
   { path: 'login', component: AppComponent },  
   { path: 'admin', component: AdminComponent, canActivate : [AuthGuard] },
   { path: 'encoder', component: EncoderComponent, canActivate : [AuthGuard] } 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
