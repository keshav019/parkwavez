import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
=======
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from '@angular/material/card';
=======
>>>>>>> 9c71a97d1f1d589e0f05552f5e471c5cb6946c79
>>>>>>> 5b4a62adcee6c7ec0594514bac1f2b57ac9d8588

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PaymentComponent
=======
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SupportComponent,
    SearchComponent
>>>>>>> 9c71a97d1f1d589e0f05552f5e471c5cb6946c79
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
