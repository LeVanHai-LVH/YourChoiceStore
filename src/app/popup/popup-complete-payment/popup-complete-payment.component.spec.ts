import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCompletePaymentComponent } from './popup-complete-payment.component';

describe('PopupCompletePaymentComponent', () => {
  let component: PopupCompletePaymentComponent;
  let fixture: ComponentFixture<PopupCompletePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCompletePaymentComponent]
    });
    fixture = TestBed.createComponent(PopupCompletePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
