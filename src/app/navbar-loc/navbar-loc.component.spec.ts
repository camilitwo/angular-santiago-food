import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLocComponent } from './navbar-loc.component';

describe('NavbarLocComponent', () => {
  let component: NavbarLocComponent;
  let fixture: ComponentFixture<NavbarLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLocComponent]
    });
    fixture = TestBed.createComponent(NavbarLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
