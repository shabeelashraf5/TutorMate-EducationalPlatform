import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Register } from '../../../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'token';
  //private emailKey = 'email';
  private userKey = 'user';

  private isLogged = new BehaviorSubject<boolean>(this.hasToken());
  loggedIn$ = this.isLogged.asObservable();


  private isUsers = new BehaviorSubject<{
    email: string | null;
    fname: string | null;
    lname: string | null;
  }>({
    email: this.getEmailFromStorage(),
    fname: this.getFnameFromStorage(),
    lname: this.getLnameFromStorage(),
  });
  users$ = this.isUsers.asObservable();

  //isLogged = signal<boolean>(this.hasToken())

  constructor(private http: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<{
    success: boolean;
    message: string;
    token: string;
    users: { email: string; fname: string; lname: string };
  }> {
    return this.http
      .post<{
        success: boolean;
        message: string;
        token: string;
        users: { email: string; fname: string; lname: string };
      }>(`${this.apiUrl}/home`, { email, password })
      .pipe(
        tap((response) => {
          console.log('Login Response', response);
          if (response.success) {
            localStorage.setItem(this.tokenKey, response.token);
            localStorage.setItem('email', response.users.email);
            localStorage.setItem('fname', response.users.fname);
            localStorage.setItem('lname', response.users.lname);
            this.isLogged.next(true);
            this.isUsers.next({
              email: response.users.email,
              fname: response.users.fname,
              lname: response.users.lname,
            });

            console.log('Users:', response.users);
            console.log('Token:', response.token);
          }
        })
      );
  }


  // getStoredUser(): {
  //   email: string | null;
  //   fname: string | null;
  //   lname: string | null;
  // } | null {
  //   const user = localStorage.getItem(this.userKey);
  //   return user ? JSON.parse(user) : null;
  // }

  logOut() {
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem('email');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    //localStorage.clear();
    this.isLogged.next(false);
    //this.isLogged.set(false)
    console.log('Token after logout:', this.getToken());
  }

  private getEmailFromStorage(): string | null {
    return localStorage.getItem('email');
  }

  private getFnameFromStorage(): string | null {
    return localStorage.getItem('fname');
  }

  private getLnameFromStorage(): string | null {
    return localStorage.getItem('lname');
  }

  getToken() {
    const token = localStorage.getItem(this.tokenKey);
    console.log('Retrieved Token:', token);
    return token;
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }
}
