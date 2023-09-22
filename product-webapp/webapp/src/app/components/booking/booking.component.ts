import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BookingDataService } from 'src/app/booking-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from 'src/app/payment/payment.component';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  chargeTypes = ['Hourly', 'Monthly', 'Residental', 'Yearly'];

   bookingForm:any;
   spotId: any;
   price: number=0;

  constructor (private formBuilder:FormBuilder,private http: HttpClient,private bookingDataService:BookingDataService, private router: Router, private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,){
    this.activatedRoute.params.subscribe((params) => {
      this.spotId = params['spotId'];
    });
  }

  ngOnInit():void{
    this.bookingForm=this.formBuilder.group({
      bookingId:['1'],
      UserId:['11'],
      SpotId:[this.spotId],
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
        // this.bookingDataService.submitBooking(this.bookingForm.value).subscribe(
        //   (response) =>{
        //     console.log('submitted Sucessfully',response);
        //   },
        //   (error) =>{
        //     console.error('error submitting booking',error);
        //   }


        // );
        this.openAddDialog();



      }
  }


  move(){
    this.router.navigate(['/payment']);
  }


  public getPrice(){
    this.price = 10;
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      data: { price: this.price },
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
    dialogRef.afterClosed();
    // dialogRef.afterClosed().subscribe((price: number) => {
    //   if (price) {

    //   } else {
    //     console.log('Dialog closed without data.');
    //   }
    // });
  }




}
