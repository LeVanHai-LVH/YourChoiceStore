import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPopupDynamicComponent } from './box-popup-dynamic.component';

describe('BoxPopupDynamicComponent', () => {
  let component: BoxPopupDynamicComponent;
  let fixture: ComponentFixture<BoxPopupDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPopupDynamicComponent]
    });
    fixture = TestBed.createComponent(BoxPopupDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
