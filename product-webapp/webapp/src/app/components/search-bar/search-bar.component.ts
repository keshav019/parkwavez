import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ParkingAreaN } from '../models/ParkingAreaN';
import { ParkingAreaServiceN } from '../service/parking-area-n.service';
import { Route, Router } from '@angular/router';
import { ReviewService } from 'src/app/service/review.service';
import { ReviewListFormComponent } from 'src/app/review-list-form/review-list-form.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
  searchText: string;

  @Output() searchEvent = new EventEmitter<string>();

  constructor(
    public dialog: MatDialog,
    private _parkingAreaService: ParkingAreaServiceN,
    private reviewService: ReviewService,
    private router: Router
  ) {
    this.searchText = '';
  }

  onInputChange() {
    // Emit the search text to the parent component
    this.searchEvent.emit(this.searchText);
  }

  clearSearch() {
    // Clear the input field and emit an empty search text
    this.searchText = '';
    this.searchEvent.emit('');
  }

  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
      price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
      price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
  ];

  @ViewChild('carousel') carousel!: ElementRef;

  parkingAreas: ParkingAreaN[] = [];

  getParkingAreas(city: string) {
    this._parkingAreaService
      .getParkingAreaByCity(city)
      .subscribe((parkingAreas: any) => {
        this.parkingAreas = parkingAreas.content;
      });
  }



  selectedProduct !: ParkingAreaN;
  city:string = '';





  scrollLeft(event: Event) {
    event.stopPropagation();
    this.carousel.nativeElement.scrollLeft -=
      this.carousel.nativeElement.offsetWidth;
  }
  scrollRight(event: Event) {
    event.stopPropagation();
    this.carousel.nativeElement.scrollLeft +=
      this.carousel.nativeElement.offsetWidth;
  }

  showProductDetails(product: ParkingAreaN) {
    this.selectedProduct = product;

    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      disableClose: false,
      width: '1000px',
      height: '500px',
      data: this.selectedProduct,
      hasBackdrop: true,
    });
  }

  closeProductDetails() {
    // this.selectedProduct = null;
  }


    appear: boolean = false;


  search() {
    console.log('city in search function', this.city);

    this.getParkingAreas(this.city);
    this.appear=true;
  }



  navigate(providerId: number) {
    // Fetch reviews from the service
    // const reviews = this.reviewService.getReviewsByProviderId(providerId);

    // Open the dialog and pass the reviews data
    this.dialog.open(ReviewListFormComponent, {
      data:  providerId ,
      width: '500px' // Adjust the width as needed
    });
  }

}
