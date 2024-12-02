import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl = 'http://localhost:3000/api'
  private tokenKey = 'token'

  private isLogged = new BehaviorSubject<boolean>(this.hasToken())
  loggedIn$ = this.isLogged.asObservable()

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{success: boolean; message: string; token: string; }>{

    return this.http.post<{success: boolean; message: string; token: string; }>(`${this.apiUrl}/login`, {email, password}).pipe(
      tap(response => {
        console.log('Login Response', response)
        if(response.success){
          localStorage.setItem(this.tokenKey, response.token)
          this.isLogged.next(true)
          console.log('Token:', response.token)
       
        }
      })
    )
  }



  logOut(){

    localStorage.removeItem(this.tokenKey)
    this.isLogged.next(false)
    console.log('Token after logout:', this.getToken())

  }


  getToken(){

    const token = localStorage.getItem(this.tokenKey)
    console.log('Retrieved Token:', token)
    return token  

  }


  private hasToken(): boolean{

    return !!this.getToken()

  }

}
