import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoxPopupDynamicService } from 'src/app/Dynamic/box-popup-dynamic/box-popup-dynamic.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(
    private boxPopupDynamicService: BoxPopupDynamicService
  ){}

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

  showPopupComfirmPayment(){
    this.boxPopupDynamicService.popupComfirmPayment({
      product_id: 1
    })
  }


}
