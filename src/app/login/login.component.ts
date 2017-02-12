import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { AuthGuard } from '../auth/authGuard';
import { User } from '../user/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private user: User;
  private errorMsg: String;
  
  constructor(private loginService: LoginService, private authGuard: AuthGuard) { 
  }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    const login$ = this.loginService.authenticate(this.user.name, this.user.password);
    login$.subscribe(
      token => {
        this.authGuard.successfulLogin(token);
      },
      () => this.errorMsg = "error occurred during authentication",
      () => console.log("authenticate() service call completed")
    );
  }
}
