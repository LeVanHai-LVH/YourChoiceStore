import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHomePageComponent } from './body-home-page.component';

describe('BodyHomePageComponent', () => {
  let component: BodyHomePageComponent;
  let fixture: ComponentFixture<BodyHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyHomePageComponent]
    });
    fixture = TestBed.createComponent(BodyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
