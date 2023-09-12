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

@NgModule({
  declarations: [
    ProviderHomeComponent,
    DashboardComponent,
    ProfileComponent,
    ParkingAreaComponent,
    AddParkingAreaFormComponent,
    LocationComponent,
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
    MatCardModule
  ],
})
export class ProviderModule {}
