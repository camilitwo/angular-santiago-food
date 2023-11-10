import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarStoresComponent } from './navbar-stores.component';

describe('NavbarStoresComponent', () => {
  let component: NavbarStoresComponent;
  let fixture: ComponentFixture<NavbarStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarStoresComponent]
    });
    fixture = TestBed.createComponent(NavbarStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
