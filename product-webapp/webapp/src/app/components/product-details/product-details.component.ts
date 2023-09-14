import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ParkingArea } from './models/parking-area';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  fromDate: Date | null;
  toDate: Date | null;

  submitDateRange(): void {
    // Handle the selected date range here
    console.log('From Date:', this.fromDate);
    console.log('To Date:', this.toDate);

    // You can perform filtering or any other action with the selected date range.
  }


  parkingAreas: ParkingArea[] = [
    {
      id: 1,
      name: 'Parking Block 1',
      pricePerHour: 10,
      vehicleType: 'Car',
      numberOfSpots: 50,
    },
    {
      id: 2,
      name: 'Parking Block 2',
      pricePerHour: 15,
      vehicleType: 'Bike',
      numberOfSpots: 30,
    },
    {
      id: 3,
      name: 'Parking Block 3',
      pricePerHour: 10,
      vehicleType: 'Both',
      numberOfSpots: 50,
    },
    {
      id: 4,
      name: 'Parking Block 4',
      pricePerHour: 15,
      vehicleType: 'Both',
      numberOfSpots: 30,
    },
    {
      id: 5,
      name: 'Parking Block 5',
      pricePerHour: 10,
      vehicleType: 'Car',
      numberOfSpots: 50,
    },
    {
      id: 6,
      name: 'Parking Block 6',
      pricePerHour: 15,
      vehicleType: 'Bike',
      numberOfSpots: 30,
    },
    {
      id: 7,
      name: 'Parking Block 7',
      pricePerHour: 10,
      vehicleType: 'Both',
      numberOfSpots: 50,
    },
    {
      id: 8,
      name: 'Parking Block 8',
      pricePerHour: 15,
      vehicleType: 'Both',
      numberOfSpots: 30,
    },
    {
      id: 9,
      name: 'Parking Block 9',
      pricePerHour: 15,
      vehicleType: 'Both',
      numberOfSpots: 30,
    },
    {
      id: 10,
      name: 'Parking Block 10',
      pricePerHour: 10,
      vehicleType: 'Car',
      numberOfSpots: 50,
    },
    {
      id: 11,
      name: 'Parking Block 11',
      pricePerHour: 15,
      vehicleType: 'Bike',
      numberOfSpots: 30,
    },
    {
      id: 12,
      name: 'Parking Block 12',
      pricePerHour: 10,
      vehicleType: 'Both',
      numberOfSpots: 50,
    },
    {
      id: 13,
      name: 'Parking Block 13',
      pricePerHour: 15,
      vehicleType: 'Both',
      numberOfSpots: 30,
    },
  ];

  originalParkingAreas: ParkingArea[] = [...this.parkingAreas];
  

  displayedColumns: string[] = ['id', 'name', 'vehicleType', 'pricePerHour', 'actions'];
  selectedVehicleType: string = 'All'; 
  selectedPrice: number | 'All' =  'All'; 

  
 

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
      private _adapter: DateAdapter<any>
    ) {
        this.fromDate = null;
        this.toDate = null;

      // this.parkingAreas = data.parkingAreas;
      if (data && data.parkingAreas) {
        this.parkingAreas = data.parkingAreas;
        this.originalParkingAreas = [...data.parkingAreas]; 
    }
      }
    


    ngOnInit(): void {}


    filterParkingAreas(): void {
      this.parkingAreas = this.originalParkingAreas.filter((parkingArea: ParkingArea) => {
        if (this.selectedVehicleType === 'All' && this.selectedPrice === 'All') {
          return true;
        } else if (this.selectedVehicleType === 'All') {
          return this.matchesPriceFilter(parkingArea);
        } else if (this.selectedVehicleType === 'Car' || this.selectedVehicleType === 'Bike') {
          return (
            (parkingArea.vehicleType === 'Both' || parkingArea.vehicleType === this.selectedVehicleType) &&
            this.matchesPriceFilter(parkingArea)
          );
        } else {
          return (
            parkingArea.vehicleType === this.selectedVehicleType &&
            this.matchesPriceFilter(parkingArea)
          );
        }
      });
    }
    
    matchesPriceFilter(parkingArea: ParkingArea): boolean {
      if (this.selectedPrice === 'All') {
        return true;
      } else {
        return parkingArea.pricePerHour === +this.selectedPrice;
      }
    }

resetFilters(): void {
  this.selectedVehicleType = 'All';
  this.selectedPrice = 'All';

 this.parkingAreas = [...this.originalParkingAreas];
}

onClose(): void {
  this.dialogRef.close();
}

}
