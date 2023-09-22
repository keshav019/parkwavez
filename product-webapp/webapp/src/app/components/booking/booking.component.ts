import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { BookingDataService } from 'src/app/booking-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { MAT_DATEPICKER_SCROLL_STRATEGY, MatDateSelectionModel } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
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
      bookingId:[''],
      UserId:[''],
      SpotId:[''],
      emailId:[''],
      Booking_Date:[new Date()],
      check_In:[''],
      check_Out:[''],

      Amount:['']

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


   getPrice(){
    this.price = 10;
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      data: { price: this.price },
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
    // dialogRef.afterClosed();
    // dialogRef.afterClosed().subscribe((price: number) => {
    //   if (price) {

    //   } else {
    //     console.log('Dialog closed without data.');
    //   }
    // });
  }



 }

