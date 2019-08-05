import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RegisterService} from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  userValidator = {
    isAlreadyExist:false,
    errorMessage:''
  };

  constructor(private registerService:RegisterService) {
   
   }

  ngOnInit() {
  }

  onSubmit(){
    this.registerService.createUsers(this.registerForm.value).subscribe(user=>{
      let _user = JSON.parse(user.toString());

      if(_user && _user.errorMessage){
        this.userValidator = {
          isAlreadyExist:true,
          errorMessage:_user.errorMessage
        };
        console.log(_user.errorMessage);
        return;
      }
      console.log( _user);
      this.userValidator = {
        isAlreadyExist:false,
        errorMessage:''
      };
    });
    // console.log('value...',this.registerForm.value);
  }

}
