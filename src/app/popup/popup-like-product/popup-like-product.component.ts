import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-like-product',
  templateUrl: './popup-like-product.component.html',
  styleUrls: ['./popup-like-product.component.scss']
})
export class PopupLikeProductComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }
}
