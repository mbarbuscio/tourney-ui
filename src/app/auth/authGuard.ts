import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    token = null;

    constructor(private router: Router) {

    }

    canActivate() {
        if (this.token) {
            return true;
        } else {
            this.redirectToLogin();
        }
    }

    successfulLogin(token){
        this.token = token.replace("JWT: ", "")
        this.router.navigate(["dashboard"]);
    }

    redirectToLogin(){
        this.router.navigate(["login"]);
    }
}