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
  return this.httpClient.get<Booking[]>(`$(this.baseURL)`);
}

 //private bookingData:any;

 //setBookingData(data:any){
  //this.bookingData=data;
 //}

 //getBookingData(){
  //return this.bookingData;
 //}
}
