import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { User } from '../user/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: User;
  loginService: LoginService;
  token: String;

  constructor(loginSrvc: LoginService) { 
    this.loginService = loginSrvc;
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    this.token = "";
    const login$ = this.loginService.authenticate(this.user.name, this.user.password);
    login$.subscribe(
      token => this.token = token.replace("JWT: ", ""),
      () => console.log("error occurred during authenticate"),
      () => console.log("authenticate() service call completed")
    );
  }

}
