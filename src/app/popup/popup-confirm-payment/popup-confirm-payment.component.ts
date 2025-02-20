import { Component, EventEmitter, Output } from '@angular/core';
import { BoxPopupDynamicComponent } from './../../Dynamic/box-popup-dynamic/box-popup-dynamic.component';
import { BoxPopupDynamicService } from 'src/app/Dynamic/box-popup-dynamic/box-popup-dynamic.service';

@Component({
  selector: 'app-popup-confirm-payment',
  templateUrl: './popup-confirm-payment.component.html',
  styleUrls: ['./popup-confirm-payment.component.scss']
})
export class PopupConfirmPaymentComponent {

  constructor(
    private boxPopupDynamicService: BoxPopupDynamicService
  ){}

    @Output() close_popup = new EventEmitter<boolean>();
  

  isChecked = false;

  isPrice = 0;

  onClickChangeCheckbox():void{
    this.isChecked = !this.isChecked;
  }

  onClickPlus():void{
    this.isPrice += 1;
  }

  onClickMinus():void{
    this.isPrice -= 1;
  }

  onClickClosePopup():void{
    this.close_popup.emit(true);
  }

  showPopupComplete(){
    this.boxPopupDynamicService.popupCompletePayment({
      product_id: 1
    })
    this.onClickClosePopup();
  }
}
