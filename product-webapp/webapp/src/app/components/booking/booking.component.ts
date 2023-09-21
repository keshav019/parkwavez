import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { BookingDataService } from 'src/app/booking-data.service';
import { MAT_DATEPICKER_SCROLL_STRATEGY, MatDateSelectionModel } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

   bookingForm:any;
   
  constructor (private formBuilder:FormBuilder,private http: HttpClient,
    private bookingDataService:BookingDataService,
    private datePipe: DatePipe){}

  ngOnInit():void{
    this.bookingForm=this.formBuilder.group({
      bookingId:['1'],
      UserId:['11'],
      SpotId:['1'],
      emailId:['abc@gmail.com'],
      Booking_Date:[this.datePipe.transform(new Date(), 'yyyy-MM-dd')],
      Check_In:[this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm')],
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
