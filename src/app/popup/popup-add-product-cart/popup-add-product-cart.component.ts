import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-add-product-cart',
  templateUrl: './popup-add-product-cart.component.html',
  styleUrls: ['./popup-add-product-cart.component.scss'],
})
export class PopupAddProductCartComponent {
  constructor(private router: Router) {}
  @Output() close_popup = new EventEmitter<boolean>();

  onClickClosePopup(): void {
    this.close_popup.emit(true);
  }

  onClickNavigateCart(): void {
    this.router.navigate([`/cart`]);
    this.onClickClosePopup();
  }
}
