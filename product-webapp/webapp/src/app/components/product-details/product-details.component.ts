import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ParkingArea } from './models/parking-area';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParkingAreaN } from '../models/ParkingAreaN';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParkingSpotDetails } from './models/parking-spot-details';
import { ParkingSpotService } from '../service/parking-spot.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  //dateForm: FormGroup;

  fromDate: Date | null;
  toDate: Date | null;

  submitDateRange(): void {
    // Handle the selected date range here
    console.log('From Date:', this.fromDate);
    console.log('To Date:', this.toDate);

    // You can perform filtering or any other action with the selected date range.
  }



  displayedColumns: string[] = ['parkingSpotNumber', 'spotType', 'actions'];
  selectedVehicleType: string = 'All'; 
  selectedPrice: number | 'All' =  'All'; 

  
 
  parkingSpotDetails !: ParkingSpotDetails;
  parkingSpots: any[] = [];
  areaId:string = '';


  getParkingAreas(areaId: string | undefined) {
    this._parkingSpotService.getSpotByAreaId(areaId).subscribe(
      (data: any) => {
        this.parkingSpots = data;
      }
    );
  }
  originalParkingAreas !: any;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ParkingAreaN,
      private _adapter: DateAdapter<any>,
      private _parkingSpotService: ParkingSpotService
    ) {

      console.log("areaId in product-details.component.ts", data.areaId);
        
      this.getParkingAreas(data.areaId);

      this.originalParkingAreas = [...this.parkingSpots];
      console.log(this.originalParkingAreas);
        this.fromDate = null;
        this.toDate = null;
      }
    
      

    ngOnInit(): void {}
    
    filterParkingAreas(): void {
      this.parkingSpots = this.originalParkingAreas.filter((parkingArea: any) => {
        if (
          (this.selectedVehicleType === 'All' || parkingArea.spotType === this.selectedVehicleType)
        ) {
          return true;
        }
        return false;
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

 this.parkingSpots = [...this.originalParkingAreas];
}

applyFilters(): void {
  this.filterParkingAreas();
  this.submitDateRange();
}

onClose(): void {
  this.dialogRef.close();
}

}
