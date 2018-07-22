import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCoincidenciasComponent } from './busqueda-coincidencias.component';

describe('BusquedaCoincidenciasComponent', () => {
  let component: BusquedaCoincidenciasComponent;
  let fixture: ComponentFixture<BusquedaCoincidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaCoincidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaCoincidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
