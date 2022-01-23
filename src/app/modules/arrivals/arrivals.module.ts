import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrivalsRoutingModule } from './arrivals-routing.module';
import { ArrivalsPageComponent } from './pages/arrivals-page/arrivals-page.component';


@NgModule({
  declarations: [
    ArrivalsPageComponent
  ],
  imports: [
    CommonModule,
    ArrivalsRoutingModule
  ]
})
export class ArrivalsModule { }
