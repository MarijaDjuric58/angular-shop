import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  errorExists=false;
  errorText='';
 
  constructor(private UserService:UserService, private router:Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit(form: NgForm){
    var email=form.value.email;
    var password=form.value.password;
    var user=this.UserService.getUserEmail(email);
 
    if (!user){
      this.errorExists=true;
      this.errorText='user dosn\'t exist' +email;
      return;
    }
 
    var isPasswordValid=this.UserService.isPassOk(email, password);
 
    if(!isPasswordValid){
      this.errorExists=true;
      this.errorText='incorrect password';
      return;
    }

    
  

    this.errorExists=false;
    this.router.navigate(['']);
    localStorage.setItem('email', email);
    

    //reload stranice, nadji kod na netu
 
  }
}