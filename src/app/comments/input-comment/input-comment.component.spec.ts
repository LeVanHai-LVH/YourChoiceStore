import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommentComponent } from './input-comment.component';

describe('InputCommentComponent', () => {
  let component: InputCommentComponent;
  let fixture: ComponentFixture<InputCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCommentComponent]
    });
    fixture = TestBed.createComponent(InputCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
