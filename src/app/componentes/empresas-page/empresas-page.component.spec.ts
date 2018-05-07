import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasPageComponent } from './empresas-page.component';

describe('EmpresasPageComponent', () => {
  let component: EmpresasPageComponent;
  let fixture: ComponentFixture<EmpresasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
