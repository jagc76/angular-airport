import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparturesRoutingModule } from './departures-routing.module';
import { DeparturesPageComponent } from './pages/departures-page/departures-page.component';


@NgModule({
  declarations: [
    DeparturesPageComponent
  ],
  imports: [
    CommonModule,
    DeparturesRoutingModule
  ]
})
export class DeparturesModule { }
