import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { BookingDataService } from 'src/app/booking-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from 'src/app/payment/payment.component';
import {
  MAT_DATEPICKER_SCROLL_STRATEGY,
  MatDateSelectionModel,
} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { DateTime, priceTable } from './pricrservice';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  chargeTypes = ['Hourly', 'Monthly', 'Residental', 'Yearly'];
  bookingForm: any;
  spotId: any;
  price: number = 0;
  isDisable: boolean = false;
  plan = 'Hourly';
  userId: any;
  checkOut: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private bookingDataService: BookingDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private authService:AuthenticationService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.spotId = params['spotId'];
    });
    this.authService.user.subscribe((user) => {
      this.userId = user.userId;
    });
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      bookingId: [''],
      userId: [this.userId],
      spotId: [this.spotId],
      emailId: [''],
      booking_date: [new Date()],
      check_In: [''],
      check_Out: [''],
      amount: [''],
    });
  }

  moveToPayment() {
    if (this.bookingForm.valid) {
      this.bookingForm.get('amount').setValue(this.price);
      console.log(this.bookingForm.value);
      this.bookingDataService.submitBooking(this.bookingForm.value).subscribe(
        (response) => {
          console.log('submitted Sucessfully', response);
        },
        (error) => {
          console.error('error submitting booking', error);
        }
      );
      this.openAddDialog();
    }
  }

  move() {
    this.router.navigate(['/payment']);
  }
  selectPlan() {
    if (this.plan === 'Hourly') {
      this.isDisable = false;
    } else {
      this.isDisable = true;
    }
  }
  getCheckOut() {
    const dateDime = new DateTime();
    if (this.plan == 'Monthly') {
      this.bookingForm
        .get('check_Out')
        .setValue(dateDime.addDays(this.bookingForm.get('check_In').value, 30));
    } else {
      this.bookingForm
        .get('check_Out')
        .setValue(
          dateDime.addDays(this.bookingForm.get('check_In').value, 365)
        );
    }
    this.checkOut = this.bookingForm.get('check_Out').value;
  }

  getPrice() {
    const dateDime = new DateTime();
    if (this.plan === 'Hourly') {
      var period = dateDime.getHoursDifference(
        this.bookingForm.get('check_In').value,
        this.bookingForm.get('check_Out').value
      );
      this.price = 20 + priceTable[this.plan] * period;
    } else {
      this.getCheckOut();
      this.price = priceTable[this.plan];
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      data: { price: this.price },
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
  }

  bookingList() {
    this.router.navigate(['/bookingList']);
  }

  moveToSpotBooking() {
    this.router.navigate(['/']);
  }
}
