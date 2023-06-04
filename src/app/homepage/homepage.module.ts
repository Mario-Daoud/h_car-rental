import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { PromobannerComponent } from './promobanner/promobanner.component';

@NgModule({
  declarations: [LandingComponent, HomepageComponent, PlanTripComponent, PromobannerComponent],
  imports: [CommonModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
