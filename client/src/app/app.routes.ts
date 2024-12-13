import { Routes } from '@angular/router';
import { RegisterComponent } from './features/users/register/register.component';
import { HomeComponent } from './features/users/home/home.component';
import { loggedOutGuard } from './core/guards/users/logged-out.guard';
import { loggedInGuard } from './core/guards/users/logged-in.guard';
import { LoginadComponent } from './features/admin/loginad/loginad.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { UsersadComponent } from './features/admin/usersad/usersad.component';
import { AdminlayoutComponent } from './features/admin/adminlayout.component';
import { LoginuserComponent } from './features/users/loginuser/loginuser.component';
import { adminloggedOutGuard } from './core/guards/admin/adminlogged-out.guard';
import { adminloggedInGuard } from './core/guards/admin/adminlogged-in.guard';
import { QuizComponent } from './features/users/quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: LoginuserComponent, canActivate: [loggedOutGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loggedOutGuard],
  },
  { path: 'home', component: HomeComponent, canActivate: [loggedInGuard], children: [
    {path: 'quiz', component: QuizComponent, canActivate: [loggedInGuard] }
  ] },

  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginadComponent, canActivate: [adminloggedOutGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [adminloggedInGuard] },
      { path: 'users', component: UsersadComponent, canActivate: [adminloggedInGuard]  },
    ],
  },
];
