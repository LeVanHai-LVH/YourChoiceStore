import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

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
}
