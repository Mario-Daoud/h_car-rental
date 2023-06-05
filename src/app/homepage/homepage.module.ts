import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { PromobannerComponent } from './promobanner/promobanner.component';
import { HomepageWrapComponent } from './homepage-wrap/homepage-wrap.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './form/form.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    LandingComponent,
    PlanTripComponent,
    PromobannerComponent,
    HomepageWrapComponent,
    CarlistComponent,
    FormComponent,
    WhyusComponent,
    ReviewsComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [HomepageWrapComponent],
})
export class HomepageModule {}
