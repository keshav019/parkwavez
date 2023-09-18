import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'http://localhost:8089'; // Adjust the API URL

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  openReviewForm() {
    this.dialog.open(ReviewFormComponent, {
      width: '400px' // Adjust the width as needed
    });
  }
  // Add the submitReview method
  submitReview(reviewData: any) {
    // Implement your logic to submit the review here (e.g., send to a backend API).
    return this.http.post(`${this.apiUrl}/reviewAndRating`, reviewData);
    alert("Submitted successfully");
  }

}
