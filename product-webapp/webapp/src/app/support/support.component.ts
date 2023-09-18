import { Component } from '@angular/core';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  constructor(private reviewService: ReviewService) { }

  openReviewForm() {
    this.reviewService.openReviewForm();
  }
}
