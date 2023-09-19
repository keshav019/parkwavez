import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BookingDataService } from 'src/app/booking-data.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

   bookingForm:any;
   
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private bookingDataService:BookingDataService){}

  ngOnInit():void{
    this.bookingForm=this.formBuilder.group({
      bookingId:[''],
      UserId:[''],
      SpotId:[''],
      emailId:[''],
      Booking_Date:[new Date()],
      Check_In:[new Date()],
      Check_Out:[new Date()],
      Amount:['']
    })
  }

    moveToPayment(){
      if(this.bookingForm.valid)
      {
        const bookingData={//this.bookingForm.value;
          
      userId: this.bookingForm.get('UserId').value,
      spotId: this.bookingForm.get('SpotId').value,
      emailId: this.bookingForm.get('emailId').value,
      Booking_date: new Date(this.bookingForm.get('Booking_Date').value), // Convert to Date
      Check_In: new Date(this.bookingForm.get('Check_In').value), // Convert to Date
      Check_Out: new Date(this.bookingForm.get('Check_Out').value), // Convert to Date
    
      amount: parseFloat(this.bookingForm.get('Amount').value)
        };
        console.log(this.bookingForm.value)
        this.bookingDataService.submitBooking(bookingData).subscribe(
          (response) =>{
            console.log('submitted Sucessfully',response);
          },
          (error) =>{
            console.error('error submitting booking',error);
          }
          
          
        );
       


      }
  }
}
