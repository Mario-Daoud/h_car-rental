import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-wrap',
  template: `
    <app-landing></app-landing>
    <app-plan-trip></app-plan-trip>
    <app-promobanner></app-promobanner>
  `,
  styles: [],
})
export class HomepageWrapComponent {}
