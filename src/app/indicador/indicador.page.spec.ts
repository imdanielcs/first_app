import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicadorPage } from './indicador.page';

describe('IndicadorPage', () => {
  let component: IndicadorPage;
  let fixture: ComponentFixture<IndicadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
