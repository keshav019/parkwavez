import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
  searchText: string;


  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
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


}
