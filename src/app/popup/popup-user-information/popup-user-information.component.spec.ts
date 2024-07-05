import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUserInformationComponent } from './popup-user-information.component';

describe('PopupUserInformationComponent', () => {
  let component: PopupUserInformationComponent;
  let fixture: ComponentFixture<PopupUserInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupUserInformationComponent]
    });
    fixture = TestBed.createComponent(PopupUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
