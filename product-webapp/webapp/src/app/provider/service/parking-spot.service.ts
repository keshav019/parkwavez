import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParkingSpot } from '../model/ParkingSpot';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ParkingSpotService {
  API_URL = 'http://localhost:8085/parking-spot';
  constructor(private _httpClient: HttpClient) {}
  addPArkingSpot(parkingSpot: ParkingSpot): Observable<ParkingSpot> {
    return this._httpClient.post<ParkingSpot>(
      `${this.API_URL}/provider/${parkingSpot.parkingAreaId}/add`,
      parkingSpot
    );
  }
  getParkingSpots(areaId: string): Observable<ParkingSpot[]> {
    return this._httpClient.get<ParkingSpot[]>(
      `${this.API_URL}/public/get-by-area/${areaId}`
    );
  }
  updateParkingSpot(parkingSpot: ParkingSpot): Observable<ParkingSpot> {
    return this._httpClient.put<ParkingSpot>(
      `${this.API_URL}/provider/update/${parkingSpot.parkingSpotId}`,
      parkingSpot
    );
  }
}
