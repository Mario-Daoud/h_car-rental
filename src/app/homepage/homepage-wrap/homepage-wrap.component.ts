import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-wrap',
  template: `
    <app-landing></app-landing>
    <app-form></app-form>
    <app-plan-trip></app-plan-trip>
    <app-carlist></app-carlist>
    <app-promobanner></app-promobanner>
  `,
  styles: [],
})
export class HomepageWrapComponent {}
