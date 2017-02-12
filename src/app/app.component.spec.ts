/* tslint:disable:no-unused-variable */

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/authGuard';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComp: AppComponent;
  let debugEl: DebugElement;
  let authGuard: AuthGuard;

  beforeEach(async(() => {
    const AuthGuardStub = {
      token: 'initialToken',
      redirectToLogin: function() {
        return "redirected to login";
      }
    }

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthGuard, useValue: AuthGuardStub }
        ],
      imports: [
        MaterialModule.forRoot()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    appComp = fixture.componentInstance;
    debugEl = fixture.debugElement;
    authGuard = debugEl.injector.get(AuthGuard);
  });

  it('should create the app', () => {
    expect(appComp).toBeTruthy();
  });
  
  it('should have title Tourney at Harrenhal!', () => {
    const de = debugEl.query(By.css('.header-title'));
    expect(de.nativeElement.textContent).toContain('Tourney at Harrenhal!');
  });

  it('should redirect to login when logout is invoked', () => {
    expect(authGuard.token).toContain('initialToken');
    appComp.logout();
    expect(authGuard.token).toBeNull;
    expect(authGuard.redirectToLogin()).toContain('redirected to login');
  });
});
