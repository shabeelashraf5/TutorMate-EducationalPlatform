import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { authUserInterceptor } from './core/interceptors/users/auth-user.interceptor';
import { LoginService } from './core/service/users/login/login.service';
import { authAdminInterceptor } from './core/interceptors/admin/auth-admin.interceptor';
import { AdminloginService } from './core/service/admin/adminlogin.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule),
    provideHttpClient(
      withInterceptors([authUserInterceptor, authAdminInterceptor])
    ),
    LoginService,
    AdminloginService,
  ],
};
