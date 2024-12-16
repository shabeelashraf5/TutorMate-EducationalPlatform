import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Register } from '../../../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  registerUser(form: FormData) {
    return this.http.post(`${this.apiUrl}/register`, form);
  }
}
