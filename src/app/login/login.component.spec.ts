/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService} from './service/login.service';

describe('Component: Login', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [LoginService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });
  it('should create an instance', () => {
        let fixture = TestBed.createComponent(LoginComponent);
    let userListComponent = fixture.debugElement.componentInstance;

    let userService = fixture.debugElement.injector.get(LoginService);
    //let userListComponent = new UserListComponent(new UserService());
    expect(userListComponent).toBeTruthy();
  });
});
