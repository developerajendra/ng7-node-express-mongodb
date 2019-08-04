import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.loginUsers(this.loginForm.value).subscribe(user=>{
      let _user = JSON.parse(user);

      if(_user.success){
        console.log("login success...");
        return;
      }
      console.log('user is not herer');
    });
  }

}
