import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorExists=false;
  errorText='';

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(!this.UserService.getUserName(form.value.email)){
      this.errorExists=false;
      var newUser=this.UserService.registerUser( form.value.email,
                                                 form.value.password, 
                                                 form.value.phone, 
                                                 form.value.gender, 
                                                 form.value.adress,
                                                 form.value.name);
      this.router.navigate(["/login"]);
    } else {
      this.errorExists=true;
      this.errorText= 'already exists';
    }
  }
}