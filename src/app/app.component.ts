import { Component } from '@angular/core';
import { AuthGuard } from './auth/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tourney at Harrenhal!';

  constructor(private authGuard: AuthGuard) { 
  }

  logout() {
    this.authGuard.token = null;
    this.authGuard.redirectToLogin();
  }
}
