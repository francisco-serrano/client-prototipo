import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaInformacionComponent } from './lectura-informacion.component';

describe('LecturaInformacionComponent', () => {
  let component: LecturaInformacionComponent;
  let fixture: ComponentFixture<LecturaInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
