import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionInformeComponent } from './generacion-informe.component';

describe('GeneracionInformeComponent', () => {
  let component: GeneracionInformeComponent;
  let fixture: ComponentFixture<GeneracionInformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneracionInformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneracionInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
