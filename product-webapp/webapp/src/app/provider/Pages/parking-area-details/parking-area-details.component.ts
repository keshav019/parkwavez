import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data-service.service';
import { ParkingArea } from '../../model/ParkingArea';
import { ParkingAreaService } from '../../service/parking-area.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-area-details',
  templateUrl: './parking-area-details.component.html',
  styleUrls: ['./parking-area-details.component.css'],
})
export class ParkingAreaDetailsComponent implements OnInit {
  editingEnabled: boolean = false;
  parkingArea!: ParkingArea;
  constructor(
    private dataService: DataService,
    private parkingAreaService: ParkingAreaService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.parkingArea = this.dataService.parkingArea;
    if (!this.parkingArea) {
      this._router.navigate(['provider']);
    }
  }
  OnUpdate() {
    this.parkingAreaService.updateParkingSpace(this.parkingArea).subscribe(
      (updatedParkingSpace: ParkingArea) => {
        console.log(updatedParkingSpace);
        this.dataService.parkingArea = updatedParkingSpace;
        this.toggleEditing();
      },
      () => {}
    );
  }
  toggleEditing() {
    this.editingEnabled = !this.editingEnabled;
  }
}
