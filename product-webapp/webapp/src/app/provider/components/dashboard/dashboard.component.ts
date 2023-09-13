import { Component, OnInit } from '@angular/core';
import { ParkingAreaService } from '../../service/parking-area.service';
import { ParkingArea } from '../../model/ParkingArea';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  parkingAreas: ParkingArea[] = [];
  providerId = '1';
  message!: string;
  error!: string;
  constructor(private _parkingAreaService: ParkingAreaService) {}
  ngOnInit(): void {
    this.getParkingAreas(this.providerId);
  }
  getParkingAreas(providerId: string) {
    this._parkingAreaService.getParkingSpace(providerId).subscribe(
      (parkingAreas: any) => {
        this.parkingAreas = parkingAreas.content;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
  deleteParkingArea(areaId: string) {
    this._parkingAreaService.deleteParkingSpace(areaId).subscribe(
      (message: any) => {
        console.log('sucess', message);
        this.message = message;
        this.parkingAreas = this.parkingAreas.filter(
          (parkingarea: ParkingArea) => {
            return parkingarea.areaId != areaId;
          }
        );
      },
      (err) => {
        console.log('error', err);
        this.error = err;
      }
    );
  }
}
