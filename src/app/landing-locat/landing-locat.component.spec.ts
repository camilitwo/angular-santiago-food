import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLocatComponent } from './landing-locat.component';

describe('LandingLocatComponent', () => {
  let component: LandingLocatComponent;
  let fixture: ComponentFixture<LandingLocatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingLocatComponent]
    });
    fixture = TestBed.createComponent(LandingLocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
