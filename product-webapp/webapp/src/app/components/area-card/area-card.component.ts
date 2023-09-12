import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

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
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 3',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 4',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 5',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 6',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 7',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
    {
      name: 'Product 8',
      description: 'Description for Product 1',
      imageUrl:
        'https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=',
    },
  ];

  @ViewChild('carousel') carousel!: ElementRef;

  constructor() {}
  ngOnInit(): void {}
  scrollLeft() {
    this.carousel.nativeElement.scrollLeft -=
      this.carousel.nativeElement.offsetWidth;
  }
  scrollRight() {
    this.carousel.nativeElement.scrollLeft +=
      this.carousel.nativeElement.offsetWidth;
  }
}
