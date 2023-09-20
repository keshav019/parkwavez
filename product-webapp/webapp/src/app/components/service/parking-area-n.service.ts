import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingAreaN } from '../models/ParkingAreaN'

@Injectable({
  providedIn: 'root',
})
export class ParkingAreaServiceN {
  private cityValue:string = '';

  getCity(): string {
    return this.cityValue;
  }

  setCity(city: string): void {
    this.cityValue = city;
  }


  API_URL = 'http://localhost:8085/parking-area';
  constructor(private _httpClient: HttpClient) {}
  addParkingSpace(
    providerId: string,
    ParkingAreaN: ParkingAreaN
  ): Observable<ParkingAreaN> {
    return this._httpClient.post<ParkingAreaN>(
      `${this.API_URL}/provider/${providerId}/add`,
      ParkingAreaN
    );
  }
  getParkingSpace(providerId: string): Observable<any[]> {
    return this._httpClient.get<any[]>(
      `${this.API_URL}/provider/${providerId}/get`
    );
  }
 
  getParkingAreaById(areaId: string): Observable<ParkingAreaN> {
    return this._httpClient.get<ParkingAreaN>(
      `${this.API_URL}/public/get/${areaId}`
    );
  }
  getParkingAreaByCity(city: string) : Observable<ParkingAreaN> {
    return this._httpClient.get<ParkingAreaN>(
      `http://localhost:8085/parking-area/public/get-by-city?city=${city}`
    );
  }
}
