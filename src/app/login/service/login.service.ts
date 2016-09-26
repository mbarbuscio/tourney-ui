import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  authenticate(name: String, password: String): Observable<String> {
    let body = {name: name, password: password};
    return this.http.post('/api/authenticate', body).map(res => res.text());
  }

}
