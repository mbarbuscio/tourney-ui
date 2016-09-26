/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { routing } from '../../app.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from '../../login/login.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../service/user.service';

describe('Component: UserList', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        LoginComponent,
        UserListComponent,
        UserDetailComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        routing
      ],
      providers: [UserService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(UserListComponent);
    let userListComponent = fixture.debugElement.componentInstance;

    let userService = fixture.debugElement.injector.get(UserService);
    //let userListComponent = new UserListComponent(new UserService());
    expect(userListComponent).toBeTruthy();
  });
});
