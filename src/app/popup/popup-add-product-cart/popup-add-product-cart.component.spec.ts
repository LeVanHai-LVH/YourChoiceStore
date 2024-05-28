import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddProductCartComponent } from './popup-add-product-cart.component';

describe('PopupAddProductCartComponent', () => {
  let component: PopupAddProductCartComponent;
  let fixture: ComponentFixture<PopupAddProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddProductCartComponent]
    });
    fixture = TestBed.createComponent(PopupAddProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
