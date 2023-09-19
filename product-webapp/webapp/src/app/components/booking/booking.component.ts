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
      bookingId:['1'],
      UserId:['11'],
      SpotId:['1'],
      emailId:['abc@gmail.com'],
      Booking_Date:[new Date()],
      Check_In:[new Date()],
      Check_Out:[new Date()],
      Amount:['100']
    })
  }

    moveToPayment(){
      if(this.bookingForm.valid)
      {
        
        console.log(this.bookingForm.value)
        this.bookingDataService.submitBooking(this.bookingForm.value).subscribe(
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
