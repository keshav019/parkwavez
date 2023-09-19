import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private registrationUrl = 'http://localhost:8090/auth/register';
  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    // Make an HTTP POST request to the registration endpoint with the registration data
    return this.http.post(
      this.registrationUrl,
      JSON.stringify(data),
      httpOptions
    );
  }
}
