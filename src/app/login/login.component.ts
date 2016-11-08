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
      () => console.log("error occurred during authenticate"),
      () => console.log("authenticate() service call completed")
    );
  }
}
