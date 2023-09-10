import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderHomeComponent } from './components/provider-home/provider-home.component';



@NgModule({
  declarations: [
    ProviderHomeComponent
  ],
  imports: [CommonModule, ProviderRoutingModule],
})
export class ProviderModule {}
