import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-information-product-detail',
  templateUrl: './popup-information-product-detail.component.html',
  styleUrls: ['./popup-information-product-detail.component.scss']
})
export class PopupInformationProductDetailComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }

}
