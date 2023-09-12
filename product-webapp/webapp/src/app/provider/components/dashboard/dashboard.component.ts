import { Component, OnInit } from '@angular/core';
import { ParkingAreaService } from '../../service/parking-area.service';
import { ParkingArea } from '../../Pages/model/ParkingArea';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  parkingAreas: ParkingArea[] = [];
  providerId = "1";
  message = '';
  constructor(private _parkingAreaService: ParkingAreaService) {}
  ngOnInit(): void {
    this.getParkingAreas(this.providerId);
    console.log('dashboard....');
  }
  getParkingAreas(providerId: string) {
    this._parkingAreaService.getParkingSpace(providerId).subscribe(
      (parkingAreas: any) => {
        console.log(parkingAreas);
        this.parkingAreas = parkingAreas.content;
      },
      () => {},
      () => {}
    );
  }
}
