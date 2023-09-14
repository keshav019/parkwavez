import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.css'],
})
export class AreaCardComponent implements OnInit {
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
    {
      name: 'Product 3',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 4',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 5',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 6',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 7',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
    {
      name: 'Product 8',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
        price: 499.99,
      rating: 4.5,
      category: 'Electronics',
      brand: 'Brand X',
    },
  ];

  @ViewChild('carousel') carousel!: ElementRef;


  selectedProduct: any;




   constructor(public dialog: MatDialog) {}
  //constructor() {}


  ngOnInit(): void {}
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

  showProductDetails(product: any) {
    this.selectedProduct = product;

    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '1000px',
      height: '500px',
      data: this.selectedProduct,
    });
  }

  closeProductDetails() {
    this.selectedProduct = null;
  }

}
