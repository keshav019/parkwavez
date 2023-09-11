import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderCanload } from './guards/provider-canload.guard';
import { ProviderAuthGuard } from './guards/provider-auth.guard';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'provider',
    canLoad: [ProviderCanload],
    canActivate: [ProviderAuthGuard],
    loadChildren: () =>
      import('./provider/provider.module').then((m) => m.ProviderModule),
  },
  {path:'',component:HomeComponent},
  {path:'support',component:SupportComponent},
  {path:'contact',component:ContactComponent},
  {path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
