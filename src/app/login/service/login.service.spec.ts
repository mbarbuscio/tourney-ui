/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions  } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LoginService } from './login.service';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
        providers: [
          LoginService,
          {
              provide: Http,
              useFactory: (mockBackend, options) => {
                  return new Http(mockBackend, options);
              },
              deps: [MockBackend, BaseRequestOptions]
          },
          MockBackend,
          BaseRequestOptions
        ]
    });
  });

  it('should inject the LoginSerivce', inject([LoginService], (loginService: LoginService) => {
    expect(loginService).toBeTruthy();
  }));

  it('should return a jwt token', inject([LoginService, MockBackend], (loginService: LoginService, mockBackend: MockBackend) => {

    const mockResponse = 'JWT: someToken';
    mockBackend.connections.subscribe(
        (connection) => {
            connection.mockRespond(new Response(new ResponseOptions(
                { body: mockResponse }
            )));
        }
    );

    loginService.authenticate('Jon','I know nothing').subscribe(
        token => {
            expect(token).toContain('JWT: someToken');
        },
        () => console.log('error'),
        () => console.log('done')
    );
  }));

});