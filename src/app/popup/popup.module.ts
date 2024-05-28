import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupAddProductCartComponent } from './popup-add-product-cart/popup-add-product-cart.component';
import { PopupProductSystemInformationComponent } from './popup-product-system-information/popup-product-system-information.component';


@NgModule({
  declarations: [PopupAddProductCartComponent,PopupProductSystemInformationComponent],
  imports: [
  
  CommonModule
  ],
  exports: [PopupAddProductCartComponent,PopupProductSystemInformationComponent]
})
export class PopupModule { }
