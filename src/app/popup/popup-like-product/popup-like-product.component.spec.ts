import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLikeProductComponent } from './popup-like-product.component';

describe('PopupLikeProductComponent', () => {
  let component: PopupLikeProductComponent;
  let fixture: ComponentFixture<PopupLikeProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupLikeProductComponent]
    });
    fixture = TestBed.createComponent(PopupLikeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
