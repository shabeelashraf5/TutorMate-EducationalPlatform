import { Routes } from '@angular/router';
import { LoginComponent } from './features/users/login/login.component';
import { RegisterComponent } from './features/users/register/register.component';

export const routes: Routes = [

    {path: '' , component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    
];
