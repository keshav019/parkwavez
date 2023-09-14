import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderHomeComponent } from './Pages/provider-home/provider-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingAreaComponent } from './components/parking-area/parking-area.component';
import { AddParkingAreaFormComponent } from './components/add-parking-area-form/add-parking-area-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocationComponent } from './components/location/location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ParkingAreaDetailsComponent } from './Pages/parking-area-details/parking-area-details.component';
import { PriceComponent } from './components/price/price.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AddPriceFornComponent } from './components/add-price-forn/add-price-forn.component';
import { MatSelectModule } from '@angular/material/select';
import { EditPriceFormComponent } from './components/edit-price-form/edit-price-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ParkitSpotListComponent } from './components/parkit-spot-list/parkit-spot-list.component';
import { EditSpotComponent } from './components/edit-spot/edit-spot.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProviderNavbarComponent } from './components/provider-navbar/provider-navbar.component';
@NgModule({
  declarations: [
    ProviderHomeComponent,
    DashboardComponent,
    ProfileComponent,
    ParkingAreaComponent,
    AddParkingAreaFormComponent,
    LocationComponent,
    ParkingAreaDetailsComponent,
    PriceComponent,
    AddPriceFornComponent,
    EditPriceFormComponent,
    ParkitSpotListComponent,
    EditSpotComponent,
    ProviderNavbarComponent,
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatChipsModule
  ],
})
export class ProviderModule {}
