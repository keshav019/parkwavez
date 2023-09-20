import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
private  baseURL="http://localhost:8086/Booking";
  constructor(private httpClient:HttpClient) { }

getBookingList(): Observable<Booking[]>{
  alert(this.baseURL)
  return this.httpClient.get<Booking[]>(`${this.baseURL}`);
}
submitBooking(bookingData: any) {
  // Implement your logic to submit the review here (e.g., send to a backend API).
  return this.httpClient.post(`${this.baseURL}`, bookingData);
}

 //private bookingData:any;

 //setBookingData(data:any){
  //this.bookingData=data;
 //}

 //getBookingData(){
  //return this.bookingData;
 //}
}
