import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-product-system-information',
  templateUrl: './popup-product-system-information.component.html',
  styleUrls: ['./popup-product-system-information.component.scss']
})
export class PopupProductSystemInformationComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }
}
