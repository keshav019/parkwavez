import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

   bookingForm:any;
   
  constructor (private formBuilder:FormBuilder,private http: HttpClient){}

  ngOnInit():void{
    this.bookingForm=this.formBuilder.group({
      bookingId:[''],
      UserId:[''],
      SpotId:[String],
      emailId:[''],
      BookingDate:[new Date()],
      CheckIn:[new Date()],
      CheckOut:[new Date()],

      Amount:[Number]
    })
  }

    moveToPayment(){
      if(this.bookingForm.valid)
      {
        const bookingData=this.bookingForm.value;
        console.log(this.bookingForm.value)
        this.http.post<any>(`http://localhost:8086/Booking/save`,bookingData).subscribe(
          (response) =>{
            console.log('booking saved Successfully',response);
          },
          (error) =>{
            console.error('error saving booking',error);
          }
        );


      }
  }
}
