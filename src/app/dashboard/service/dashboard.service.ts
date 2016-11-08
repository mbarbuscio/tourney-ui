import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthGuard } from '../../auth/authGuard'; 

@Injectable()
export class DashboardService {

  constructor(private http: Http, private authGuard: AuthGuard) { 

  }

  getDashboardInfo(): Observable<string> {
    let jwtHeaders = new Headers({ 'Authorization': 'Bearer ' + this.authGuard.token });
    return this.http.get('/api/secure/castleblack', { headers: jwtHeaders }).map(res => res.text() as string);
  }

}
