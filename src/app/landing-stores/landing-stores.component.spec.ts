import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStoresComponent } from './landing-stores.component';

describe('LandingStoresComponent', () => {
  let component: LandingStoresComponent;
  let fixture: ComponentFixture<LandingStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingStoresComponent]
    });
    fixture = TestBed.createComponent(LandingStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
