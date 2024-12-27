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
import { StudymaterialComponent } from './features/users/studymaterial/studymaterial.component';
import { FoldersComponent } from './features/users/folders/folders.component';
import { DocumentsComponent } from './features/admin/documents/documents.component';
import { FilesComponent } from './features/users/files/files.component';

export const routes: Routes = [
  {
    path: 'login-user',
    component: LoginuserComponent,
    canActivate: [loggedOutGuard],
  },
  { path: '', redirectTo: 'login-user', pathMatch: 'full' },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loggedOutGuard],
  },

  {
    path: 'users',
    children: [
      { path: 'home', component: HomeComponent, canActivate: [loggedInGuard] },
      { path: 'quiz', component: QuizComponent, canActivate: [loggedInGuard] },
      {
        path: ':id/material',
        component: FoldersComponent,
        canActivate: [loggedInGuard],
      },
      {
        path: ':folderId/questions',
        component: StudymaterialComponent,
        canActivate: [loggedInGuard],
      },
    ],
  },

  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      //{ path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginadComponent,
        canActivate: [adminloggedOutGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [adminloggedInGuard],
      },
      {
        path: 'users',
        component: UsersadComponent,
        canActivate: [adminloggedInGuard],
      },

      {
        path: 'documents',
        component: DocumentsComponent,
        canActivate: [adminloggedInGuard],
      },

      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
