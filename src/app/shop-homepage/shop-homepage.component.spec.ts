import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomepageComponent } from './shop-homepage.component';

describe('ShopHomepageComponent', () => {
  let component: ShopHomepageComponent;
  let fixture: ComponentFixture<ShopHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopHomepageComponent]
    });
    fixture = TestBed.createComponent(ShopHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
