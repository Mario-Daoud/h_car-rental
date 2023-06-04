import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { PromobannerComponent } from './promobanner/promobanner.component';
import { HomepageWrapComponent } from './homepage-wrap/homepage-wrap.component';

@NgModule({
  declarations: [
    LandingComponent,
    PlanTripComponent,
    PromobannerComponent,
    HomepageWrapComponent,
  ],
  imports: [CommonModule],
  exports: [HomepageWrapComponent],
})
export class HomepageModule {}
