import { Component, Input,OnInit } from '@angular/core';
import { ParkingArea } from '../../Pages/model/ParkingArea';

@Component({
  selector: 'app-parking-area',
  templateUrl: './parking-area.component.html',
  styleUrls: ['./parking-area.component.css'],
})
export class ParkingAreaComponent implements OnInit {
  @Input() parkingArea!: ParkingArea;
  ngOnInit(): void {
    console.log(this.parkingArea);
  }
  onDelete() {
    
  }
}
