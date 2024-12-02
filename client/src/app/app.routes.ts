import { Routes } from '@angular/router';
import { LoginComponent } from './features/users/login/login.component';
import { RegisterComponent } from './features/users/register/register.component';
import { HomeComponent } from './features/users/home/home.component';
import { loggedOutGuard } from './core/guards/users/logged-out.guard';
import { loggedInGuard } from './core/guards/users/logged-in.guard';

export const routes: Routes = [

    {path: '' , component: LoginComponent, canActivate: [loggedOutGuard] },
    {path: 'register', component: RegisterComponent, canActivate: [loggedOutGuard]},
    {path: 'home', component: HomeComponent, canActivate: [loggedInGuard]},
    
];
