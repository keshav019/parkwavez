import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParkingSpotService } from '../../service/parking-spot.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParkingSpot } from '../../model/ParkingSpot';

@Component({
  selector: 'app-edit-spot',
  templateUrl: './edit-spot.component.html',
  styleUrls: ['./edit-spot.component.css'],
})
export class EditSpotComponent {
  spotForm!: FormGroup;
  error!: string;
  spotTypes = ['TwoWheeler', 'FourWheeler', 'BigVehicle', 'Handicap'];
  constructor(
    private priceService: ParkingSpotService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditSpotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parkingSpot: ParkingSpot }
  ) {
    console.log(data.parkingSpot);
    this.spotForm = this.fb.group({
      parkingSpotId: [this.data.parkingSpot.parkingSpotId],
      parkingSpotNumber: [this.data.parkingSpot.parkingSpotNumber],
      spotType: [this.data.parkingSpot.spotType],
      isOccupied: [this.data.parkingSpot.isOccupied],
      parkingAreaId: [this.data.parkingSpot.parkingAreaId],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onUpdate() {
    this.priceService.updateParkingSpot(this.spotForm.value).subscribe(
      (parkingSpot: ParkingSpot) => {
        this.dialogRef.close(parkingSpot);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
