import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css'],
})
export class ProviderHomeComponent {
  showFiller = false;
  isSmallScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall,Breakpoints.TabletPortrait])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
}
