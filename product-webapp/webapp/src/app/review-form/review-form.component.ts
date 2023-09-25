import { Component, OnInit, Inject } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  bookingId: string = '';
  rating: number | null = null;
  reviewDesc: string = '';
  userId: string = '';
  providerId: string = '';
  reviewForm!: FormGroup;
  dataSubscription!: Subscription;
  constructor(
    private reviewService: ReviewService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    public dialogRef: MatDialogRef<ReviewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { booking: any }
  ) {
    this.reviewForm = this.fb.group({
      userId: [this.userId],
      bookingId: [this.data.booking.bookingId],
      providerId: [this.providerId],
      rating: [0],
      reviewDesc: [''],
    });

    this.dataSubscription = this.authService.user.subscribe((user) => {
      this.userId = user.userId;
    });
  }
  ngOnInit(): void {
    this.reviewService.getProviderId(this.data.booking.spotId).subscribe(
      (res: any) => {
        this.providerId = res.parkingAreaId;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  submitReview() {
    // Call the service method to submit the review data

    this.reviewForm?.get('userId')?.setValue(this.userId);
    this.reviewForm?.get('providerId')?.setValue(this.providerId);
    console.log(this.reviewForm.value);
    this.reviewService.submitReview(this.reviewForm.value).subscribe(
      (response) => {
        // Handle success (e.g., show a success snackbar message)
        this.showSuccessSnackbar('Review submitted successfully!');
        // Handle success (e.g., show a success message)
        console.log('Review submitted successfully:', response);
      },
      (error) => {
        // Handle error (e.g., show an error message)
        console.error('Error submitting review:', error);
      }
    );
  }

  private showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Adjust the duration as needed (in milliseconds)
      horizontalPosition: 'center', // Position the snackbar message
      verticalPosition: 'top',
      panelClass: ['success-snackbar'], // Optional CSS class for styling
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  cancelReview() {
    this.router.navigate(['/review']);
    this.onClose();
  }

  submitClose() {
    this.router.navigate(['/review']);
    this.onClose();
  }
}
