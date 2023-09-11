import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class PaymentComponent {
  private baseUrl = '/user'; // Change this to your actual base URL

  constructor(private http: HttpClient) {}

  createOrder(amount: number): Observable<any> {
    const url = `${this.baseUrl}/create_order`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestData = { amount: amount, info: 'order_request' };

    return this.http
      .post(url, JSON.stringify(requestData), { headers: headers })
      .pipe(
        catchError((error) => {
          console.error(error);
          alert('Something went wrong !!');
          return throwError(error);
        })
      );
  }
}