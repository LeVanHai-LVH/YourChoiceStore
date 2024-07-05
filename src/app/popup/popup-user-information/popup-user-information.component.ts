import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-user-information',
  templateUrl: './popup-user-information.component.html',
  styleUrls: ['./popup-user-information.component.scss']
})
export class PopupUserInformationComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }
}
