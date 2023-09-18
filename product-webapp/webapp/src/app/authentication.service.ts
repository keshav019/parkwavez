import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8090'; 
  private jwtToken: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/auth/login`, body);
  }

  setToken(token: string) {
    this.jwtToken = token;
  }

  getToken(): string | null {
    return this.jwtToken;
  }

  getHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    return headers;
  }

  isAuthenticated(): boolean {
   
    const token = this.getToken();
    
    return !!token; 
  }

  getUserData(): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.get(`${this.baseUrl}/user/`, { headers });
  }

  getAdminData(): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.get(`${this.baseUrl}/admin/`, { headers });
  }
}
