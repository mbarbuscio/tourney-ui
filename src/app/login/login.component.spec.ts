/* tslint:disable:no-unused-variable */

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from '../auth/authGuard';import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginService} from './service/login.service';

describe('Component: Login', () => {
  
  let fixture: ComponentFixture<LoginComponent>;
  let loginComp: LoginComponent;
  let debugEl: DebugElement;
  let authGuard: AuthGuard;
  let loginService: LoginService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    const AuthGuardStub = {
      successfulLogin: function(){
      }
    }
    const LoginServiceStub = {
    }
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
          { provide: AuthGuard, useValue: AuthGuardStub },
          { provide: LoginService, use: LoginServiceStub }
        ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges()
    loginComp = fixture.componentInstance;
    debugEl = fixture.debugElement;
    authGuard = debugEl.injector.get(AuthGuard);
    loginService = debugEl.injector.get(LoginService);
  });

  it('should create the LoginComponent', () => {
    expect(loginComp).toBeTruthy();
  });

  it('should create token on successful login', () => {
    expect(loginService).toBeDefined();
    spy = spyOn(loginService, 'authenticate')
      .and.returnValue(Observable.of({token: 'testToken'}));
    loginComp.login();
  });
});
