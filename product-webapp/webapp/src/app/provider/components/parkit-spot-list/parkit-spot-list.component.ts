import { Component, Input, OnInit } from '@angular/core';
import { ParkingSpotService } from '../../service/parking-spot.service';
import { ParkingSpot } from '../../model/ParkingSpot';
import { MatDialog } from '@angular/material/dialog';
import { EditSpotComponent } from '../edit-spot/edit-spot.component';

@Component({
  selector: 'app-parkit-spot-list',
  templateUrl: './parkit-spot-list.component.html',
  styleUrls: ['./parkit-spot-list.component.css'],
})
export class ParkitSpotListComponent implements OnInit {
  @Input() areaId!: string;
  spotTypes = ['TwoWheeler', 'FourWheeler', 'BigVehicle', 'Handicap'];
  parkingSpots: ParkingSpot[] = [];
  error!: string;
  spotType!: string;

  constructor(
    private parkingSpotService: ParkingSpotService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getParkingSpots();
  }

  getParkingSpots() {
    this.parkingSpotService.getParkingSpots(this.areaId).subscribe(
      (parkingSpots: ParkingSpot[]) => {
        this.parkingSpots = parkingSpots;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }
  addParkingSpots() {
    if (!this.spotType) {
      alert('Parking Spot Type Can not be empty!');
      return;
    }
    if (!this.areaId) {
      alert('Something went wrong!');
      return;
    }
    let newParkingSpot: ParkingSpot = {
      parkingSpotId: '',
      parkingSpotNumber: 0,
      occupied: false,
      spotType: this.spotType,
      parkingAreaId: this.areaId,
    };
    this.parkingSpotService.addPArkingSpot(newParkingSpot).subscribe((spot) => {
      this.parkingSpots.push(spot);
    });
  }

  openDrawer(parkingSpot: ParkingSpot) {
    const dialogRef = this.dialog.open(EditSpotComponent, {
      data: { parkingSpot },
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });

    dialogRef.afterClosed().subscribe((updatedParkingSpot: ParkingSpot) => {
      if (updatedParkingSpot) {
        this.parkingSpots = this.parkingSpots.map((parkingSpot) => {
          if (parkingSpot.parkingSpotId === updatedParkingSpot.parkingSpotId) {
            return updatedParkingSpot;
          } else {
            return parkingSpot;
          }
        });
        this.parkingSpots = [...this.parkingSpots];
      } else {
        console.log('Dialog closed without data.');
      }
    });
    dialogRef.afterClosed().subscribe((parkingSpotId: String) => {
      if (parkingSpotId) {
        this.parkingSpots = this.parkingSpots.filter((parkingSpot) => {
          return parkingSpot.parkingSpotId != parkingSpotId;
        });
        this.parkingSpots = [...this.parkingSpots];
      } else {
        console.log('Dialog closed without data.');
      }
    });
  }
}
