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
    SuggestionComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
