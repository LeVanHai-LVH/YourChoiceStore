import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInformationProductDetailComponent } from './popup-information-product-detail.component';

describe('PopupInformationProductDetailComponent', () => {
  let component: PopupInformationProductDetailComponent;
  let fixture: ComponentFixture<PopupInformationProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupInformationProductDetailComponent]
    });
    fixture = TestBed.createComponent(PopupInformationProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
