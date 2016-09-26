import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from '../model/user';


const USERS: User[] = [
  { "name": "cercei", "house": "lannister", "password": "I am queen" }, 
  { "name": "bran", "house": "stark", "password": "I climb towers" }, 
  { "name": "aerys", "house": "targaryen", "password": "The mad king" }
];

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getMockUsers(): User[] {
    return USERS;
  }

  getUsers(): Observable<User[]> {
    return this.http.get('/api/users').map(res => res.json() as User[]);
  }

}
