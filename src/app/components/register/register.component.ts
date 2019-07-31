import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RegisterService} from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // name = new FormControl('');

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  constructor(private registerService:RegisterService) {
   
   }

  ngOnInit() {
  }

  onSubmit(){
    this.registerService.createUsers(this.registerForm.value).subscribe(users=>{
      console.log('users', users);
    });
    // console.log('value...',this.registerForm.value);
  }

}
