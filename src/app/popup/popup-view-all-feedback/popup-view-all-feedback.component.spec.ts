import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupViewAllFeedbackComponent } from './popup-view-all-feedback.component';

describe('PopupViewAllFeedbackComponent', () => {
  let component: PopupViewAllFeedbackComponent;
  let fixture: ComponentFixture<PopupViewAllFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupViewAllFeedbackComponent]
    });
    fixture = TestBed.createComponent(PopupViewAllFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
