import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWrapComponent } from './homepage-wrap.component';

describe('HomepageWrapComponent', () => {
  let component: HomepageWrapComponent;
  let fixture: ComponentFixture<HomepageWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
