import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-wrap',
  template: `
    <app-landing></app-landing>
    <app-form></app-form>
    <app-plan-trip></app-plan-trip>
    <app-carlist></app-carlist>
    <app-promobanner></app-promobanner>
    <app-whyus></app-whyus>
    <app-reviews></app-reviews>
  `,
  styles: [],
})
export class HomepageWrapComponent {}
