import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingArea } from '../Pages/model/ParkingArea';

@Injectable({
  providedIn: 'root',
})
export class ParkingAreaService {
  API_URL = 'http://localhost:8084/parking-area';
  constructor(private _httpClient: HttpClient) {}
  addParkingSpace(
    providerId: string,
    parkingArea: ParkingArea
  ): Observable<ParkingArea> {
    return this._httpClient.post<ParkingArea>(
      `${this.API_URL}/provider/${providerId}/add`,
      parkingArea
    );
  }
  getParkingSpace(providerId: string): Observable<any[]> {
    return this._httpClient.get<any[]>(
      `${this.API_URL}/provider/${providerId}/get`
    );
  }
}
