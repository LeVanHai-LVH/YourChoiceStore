import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-view-all-feedback',
  templateUrl: './popup-view-all-feedback.component.html',
  styleUrls: ['./popup-view-all-feedback.component.scss']
})
export class PopupViewAllFeedbackComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }
}
