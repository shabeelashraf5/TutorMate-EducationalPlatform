import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdusersService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  displayUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/users`);
  }
}
