import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercadoPagoPage } from './mercado-pago.page';

describe('MercadoPagoPage', () => {
  let component: MercadoPagoPage;
  let fixture: ComponentFixture<MercadoPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
