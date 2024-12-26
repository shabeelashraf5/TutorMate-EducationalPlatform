import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Folder } from '../../../../models/adminFolder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdfolderService {
  private apiUrl = 'http://localhost:3000/api/admin';

  constructor(private http: HttpClient) {}

  createFolder(form: FormData) {
    return this.http.post(`${this.apiUrl}/documents`, form);
  }

  displayFolder(): Observable<any> {
    return this.http.get(`${this.apiUrl}/documents`);
  }
}
