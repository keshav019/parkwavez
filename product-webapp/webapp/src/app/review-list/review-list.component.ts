import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: any[] = [];
  userIdFilter: string = '';
  providerIdFilter: string = '';
  bookingIdFilter: string = '';

  constructor(private reviewService: ReviewService) {}

  reviewDetails: any;

  ngOnInit() {
    this.getAllReviews();
  }



  getAllReviews() {
    this.reviewService.getReviews().subscribe(
      (resp)=> {
        console.log(resp);
        this.reviewDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
