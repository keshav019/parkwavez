import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private backendUrl = 'http://localhost:8090/auth/register'; 

  constructor(private http: HttpClient) {}

  registerUser(registrationData: any): Observable<any> {
    return this.http.post(this.backendUrl, registrationData);
  }

}