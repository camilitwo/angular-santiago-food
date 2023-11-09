import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMapaComponent } from './grafico-mapa.component';

describe('GraficoMapaComponent', () => {
  let component: GraficoMapaComponent;
  let fixture: ComponentFixture<GraficoMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoMapaComponent]
    });
    fixture = TestBed.createComponent(GraficoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
