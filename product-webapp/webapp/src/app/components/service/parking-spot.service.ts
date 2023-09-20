import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpotDetails } from '../product-details/models/parking-spot-details';

@Injectable({
  providedIn: 'root',
})
export class ParkingSpotService {
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
    ParkingAreaN: ParkingSpotDetails
  ): Observable<ParkingSpotDetails> {
    return this._httpClient.post<ParkingSpotDetails>(
      `${this.API_URL}/provider/${providerId}/add`,
      ParkingAreaN
    );
  }
  getParkingSpace(providerId: string): Observable<any[]> {
    return this._httpClient.get<any[]>(
      `${this.API_URL}/provider/${providerId}/get`
    );
  }
 
  getParkingAreaById(areaId: string): Observable<ParkingSpotDetails> {
    return this._httpClient.get<ParkingSpotDetails>(
      `${this.API_URL}/public/get/${areaId}`
    );
  }
  getParkingAreaByCity(city: string) : Observable<ParkingSpotDetails> {
    return this._httpClient.get<ParkingSpotDetails>(
      `http://localhost:8085/parking-area/public/get-by-city?city=${city}`
    );
  }

  getSpotByAreaId(areaId: string | undefined) : Observable<any> {
    return this._httpClient.get<any>(
      `http://localhost:8085/parking-spot/public/get-by-area/${areaId}`
    );
  }
}
