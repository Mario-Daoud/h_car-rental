import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromobannerComponent } from './promobanner.component';

describe('PromobannerComponent', () => {
  let component: PromobannerComponent;
  let fixture: ComponentFixture<PromobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
