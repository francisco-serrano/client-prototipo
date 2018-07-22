import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruccionEnsamblesComponent } from './construccion-ensambles.component';

describe('ConstruccionEnsamblesComponent', () => {
  let component: ConstruccionEnsamblesComponent;
  let fixture: ComponentFixture<ConstruccionEnsamblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstruccionEnsamblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstruccionEnsamblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
