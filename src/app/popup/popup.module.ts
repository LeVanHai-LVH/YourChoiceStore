import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupAddProductCartComponent } from './popup-add-product-cart/popup-add-product-cart.component';
import { PopupProductSystemInformationComponent } from './popup-product-system-information/popup-product-system-information.component';
import { PopupLikeProductComponent } from './popup-like-product/popup-like-product.component';
import { PopupUserInformationComponent } from './popup-user-information/popup-user-information.component';
import { PopupViewAllFeedbackComponent } from './popup-view-all-feedback/popup-view-all-feedback.component';


@NgModule({
  declarations: [
    PopupAddProductCartComponent,
    PopupProductSystemInformationComponent,
    PopupLikeProductComponent,
    PopupUserInformationComponent,
    PopupViewAllFeedbackComponent
  ],
  imports: [
  

  CommonModule
  ],
  exports: [
    PopupAddProductCartComponent,
    PopupLikeProductComponent,
    PopupProductSystemInformationComponent,
    PopupUserInformationComponent,
    PopupViewAllFeedbackComponent

  ]
})
export class PopupModule { }
