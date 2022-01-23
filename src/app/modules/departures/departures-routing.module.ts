import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparturesPageComponent } from './pages/departures-page/departures-page.component';

const routes: Routes = [
  {
    path: '',
    component: DeparturesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparturesRoutingModule { }
