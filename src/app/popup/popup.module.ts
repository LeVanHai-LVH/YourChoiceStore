import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupAddProductCartComponent } from './popup-add-product-cart/popup-add-product-cart.component';
import { PopupProductSystemInformationComponent } from './popup-product-system-information/popup-product-system-information.component';
import { PopupLikeProductComponent } from './popup-like-product/popup-like-product.component';
import { PopupUserInformationComponent } from './popup-user-information/popup-user-information.component';
import { PopupViewAllFeedbackComponent } from './popup-view-all-feedback/popup-view-all-feedback.component';
import { PopupInformationProductDetailComponent } from './popup-information-product-detail/popup-information-product-detail.component';
import { PopupCompletePaymentComponent } from './popup-complete-payment/popup-complete-payment.component';
import { PopupConfirmPaymentComponent } from './popup-confirm-payment/popup-confirm-payment.component';


@NgModule({
  declarations: [
    PopupAddProductCartComponent,
    PopupProductSystemInformationComponent,
    PopupLikeProductComponent,
    PopupUserInformationComponent,
    PopupViewAllFeedbackComponent,
    PopupInformationProductDetailComponent,
    PopupCompletePaymentComponent,
    PopupConfirmPaymentComponent
  ],
  imports: [
  CommonModule
  ],
  exports: [
    PopupAddProductCartComponent,
    PopupLikeProductComponent,
    PopupProductSystemInformationComponent,
    PopupUserInformationComponent,
    PopupViewAllFeedbackComponent,
    PopupInformationProductDetailComponent,
    PopupCompletePaymentComponent,
    PopupConfirmPaymentComponent


  ]
})
export class PopupModule { }
