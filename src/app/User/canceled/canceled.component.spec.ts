import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledComponent } from './canceled.component';

describe('CanceledComponent', () => {
  let component: CanceledComponent;
  let fixture: ComponentFixture<CanceledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceledComponent]
    });
    fixture = TestBed.createComponent(CanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
