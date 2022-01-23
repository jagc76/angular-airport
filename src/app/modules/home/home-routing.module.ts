import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arrivals',
    loadChildren: () => import('@modules/arrivals/arrivals.module').then(m => m.ArrivalsModule)
  },
  {
    path: 'departures',
    loadChildren: () => import('@modules/departures/departures.module').then(m => m.DeparturesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
