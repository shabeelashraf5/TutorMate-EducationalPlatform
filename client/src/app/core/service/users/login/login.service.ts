import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Register } from '../../../../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl = 'http://localhost:3000/api'
  private tokenKey = 'token'
  private emailKey = 'email'

   private isLogged = new BehaviorSubject<boolean>(this.hasToken())
   loggedIn$ = this.isLogged.asObservable()

   private isUsers = new BehaviorSubject<{email: string | null ; fname: string | null; lname: string | null}>({email: null, fname: null, lname: null })
   users$ = this.isUsers.asObservable()

  //isLogged = signal<boolean>(this.hasToken())

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{success: boolean; message: string; token: string; users: {email: string; fname: string; lname: string} }>{

    return this.http.post<{success: boolean; message: string; token: string; users: {email: string; fname: string; lname: string} }>(`${this.apiUrl}/login`, {email, password}).pipe(
      tap(response => {
        console.log('Login Response', response)
        if(response.success){
          localStorage.setItem(this.tokenKey, response.token)
           this.isLogged.next(true)

           const {email, fname, lname} = response.users
           this.isUsers.next({email, fname, lname})
          
          console.log('Users:', response.users)
          console.log('Token:', response.token)
          
       
        }
      })
    )
  }



  logOut(){

    localStorage.removeItem(this.tokenKey)
     this.isLogged.next(false)
    //this.isLogged.set(false)
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
