import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProductSystemInformationComponent } from './popup-product-system-information.component';

describe('PopupProductSystemInformationComponent', () => {
  let component: PopupProductSystemInformationComponent;
  let fixture: ComponentFixture<PopupProductSystemInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupProductSystemInformationComponent]
    });
    fixture = TestBed.createComponent(PopupProductSystemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
