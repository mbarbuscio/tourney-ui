import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/authGuard';

const appRoutes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "users",
        component: UserListComponent,
        canActivate: [AuthGuard]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);