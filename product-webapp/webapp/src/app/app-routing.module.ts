import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderCanload } from './guards/provider-canload.guard';
import { ProviderAuthGuard } from './guards/provider-auth.guard';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './components/booking/booking.component';

import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {
    path: 'provider',
    canLoad: [ProviderCanload],
    canActivate: [ProviderAuthGuard],
    loadChildren: () =>
      import('./provider/provider.module').then((m) => m.ProviderModule),
  },
  { path: '', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegistrationComponent },


  { path: 'booking',component:BookingComponent},
  {path:'payment',component:PaymentComponent},


  { path: 'login', component: LoginComponent },
  // { path: 'parking-area/:areaId/review', component: ReviewComponent },
  { path: 'review', component: ReviewComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
