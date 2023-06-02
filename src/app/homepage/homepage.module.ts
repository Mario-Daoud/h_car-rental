import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [LandingComponent, HomepageComponent],
  imports: [CommonModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
