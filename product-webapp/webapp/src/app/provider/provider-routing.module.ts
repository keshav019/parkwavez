import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderHomeComponent } from './Pages/provider-home/provider-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddParkingAreaFormComponent } from './components/add-parking-area-form/add-parking-area-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add', component: AddParkingAreaFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
