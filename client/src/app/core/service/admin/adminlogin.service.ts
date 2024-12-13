import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminloginService {
  private apiUrl = 'http://localhost:3000/api';
  private token = 'token';

  private isAdminLoged = new BehaviorSubject<boolean>(this.hasAdminToken());
  adminlogged$ = this.isAdminLoged.asObservable();


  constructor(private http: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<{
    success: boolean;
    message: string;
    admin: string;
    token: string;
  }> {
    return this.http
      .post<{
        success: boolean;
        message: string;
        admin: string;
        token: string;
      }>(`${this.apiUrl}/admin/dashboard`, { email, password })
      .pipe(
        tap((response) => {
          if (response.success) {
            localStorage.setItem(this.token, response.token);
            this.isAdminLoged.next(true);

            console.log('Token:', response.token);
          }
        })
      );
  }


  adminLoggedOut() {
    localStorage.removeItem(this.token);
    this.isAdminLoged.next(false);
    console.log('Token after Admin logout:', this.getTokens());
  }

  getTokens() {
    const token = localStorage.getItem(this.token);
    console.log('Retrieved Admin Token:', token);
    return token;
  }

  hasAdminToken(): boolean {
    return !!this.getTokens();
  }
}
