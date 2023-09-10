import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderCanload } from './guards/provider-canload.guard';
import { ProviderAuthGuard } from './guards/provider-auth.guard';

const routes: Routes = [
  {
    path: 'provider',
    canLoad: [ProviderCanload],
    canActivate: [ProviderAuthGuard],
    loadChildren: () =>
      import('./provider/provider.module').then((m) => m.ProviderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
