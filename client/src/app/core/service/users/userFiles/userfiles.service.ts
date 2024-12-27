import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfilesService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  displayUserFiles(filesId: string): Observable<any> {

    return this.http.get(`${this.apiUrl}/${filesId}/questions`)


  }




}
