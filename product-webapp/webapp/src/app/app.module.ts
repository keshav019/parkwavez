import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { SearchComponent } from './search/search.component';

import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from '@angular/material/card';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CarouselModule } from './carousel/carousel.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BookingComponent } from './components/booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SupportComponent,
    SearchComponent,
    AreaCardComponent,
    SuggestionComponent,
    FooterComponent,
    ProductDetailsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    CarouselModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
