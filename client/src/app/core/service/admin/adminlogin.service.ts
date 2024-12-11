import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  private apiUrl = 'http://localhost:3000/api'
  private token = 'token'

  constructor(private http: HttpClient) { }


  login(email: string , password: string){



    return this.http.post(`${this.apiUrl}/login`, {email, password}).pipe(
      tap((response) => {
        
        if(response){

          //localStorage.setItem(this.token, response.token)

        }
      })
    )


  }



  getToken(){

    const token = localStorage.getItem(this.token)
    return token 
  }

  
}
