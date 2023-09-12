import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkingArea } from '../../Pages/model/ParkingArea';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingAreaService } from '../../service/parking-area.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-parking-area-form',
  templateUrl: './add-parking-area-form.component.html',
  styleUrls: ['./add-parking-area-form.component.css'],
})
export class AddParkingAreaFormComponent implements OnInit {
  providerId = '1';
  location = {
    lat: 0,
    lon: 0,
  };
  parkingAreaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _parkingAreaService: ParkingAreaService,
    private _router:Router
  ) {}
  ngOnInit() {
    this.parkingAreaForm = this.fb.group({
      parkingName: [''],
      totalNoSpot: [null],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
        location: this.fb.group({
          lat: [null],
          lon: [null],
        }),
      }),
    });
  }
  getLocation() {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser.');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.parkingAreaForm
          .get('address.location.lat')
          ?.patchValue(position.coords.latitude);
        this.parkingAreaForm
          .get('address.location.lon')
          ?.patchValue(position.coords.longitude);
      });
    }
  }

  addParkingArea() {
    this._parkingAreaService
      .addParkingSpace(this.providerId, this.parkingAreaForm.value)
      .subscribe(
        (parkingAreas: ParkingArea) => {
          this._router.navigate(["/","provider"])
        },
        () => {},
        () => {}
      );
  }
}
