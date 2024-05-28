import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-add-product-cart',
  templateUrl: './popup-add-product-cart.component.html',
  styleUrls: ['./popup-add-product-cart.component.scss']
})
export class PopupAddProductCartComponent {
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }
}
