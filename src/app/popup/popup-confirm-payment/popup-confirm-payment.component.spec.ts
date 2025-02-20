import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmPaymentComponent } from './popup-confirm-payment.component';

describe('PopupConfirmPaymentComponent', () => {
  let component: PopupConfirmPaymentComponent;
  let fixture: ComponentFixture<PopupConfirmPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConfirmPaymentComponent]
    });
    fixture = TestBed.createComponent(PopupConfirmPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
