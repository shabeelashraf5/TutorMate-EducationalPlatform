import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfolderService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  displayUserFolder(userId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${userId}/material`); 
  }


}
