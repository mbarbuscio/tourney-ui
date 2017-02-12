/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [LoginService]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});

// https://blog.thoughtram.io/angular/2016/11/28/testing-services-with-http-in-angular-2.html