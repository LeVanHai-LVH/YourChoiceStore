import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxPopupDynamicService {

  private readonly $popup_like = new Subject<{product_id : number}>();
  readonly popup_like$ = this.$popup_like.asObservable();

  private readonly $popup_add_product_cart = new Subject<{product_id : number}>();
  readonly popup_add_product_cart$ = this.$popup_add_product_cart.asObservable();

  private readonly $popup_product_system_information = new Subject<{product_id : number}>();
  readonly popup_product_system_information$ = this.$popup_product_system_information.asObservable();

  private readonly $popup_user_information = new Subject<{user_id : number}>();
  readonly popup_user_information$ = this.$popup_user_information.asObservable();

  private readonly $popup_view_all_feedback = new Subject<{product_id : number}>();
  readonly popup_view_all_feedback$ = this.$popup_view_all_feedback.asObservable();

  private readonly $popup_information_product_detail = new Subject<{product_id : number}>();
  readonly popup_information_product_detail$ = this.$popup_information_product_detail.asObservable();

  private readonly $popup_comfirm_payment = new Subject<{product_id : number}>();
  readonly popup_comfirm_payment$ = this.$popup_comfirm_payment.asObservable();

  private readonly $popup_complete_payment = new Subject<{product_id : number}>();
  readonly popup_complete_payment$ = this.$popup_complete_payment.asObservable();

  popupLike(data: {product_id: number}):void{
    this.$popup_like.next(data);
  }

  popupAddProductCart(data: {product_id: number}):void{
    this.$popup_add_product_cart.next(data);
  }

  popupProductSystemInformation(data: {product_id: number}):void{
    this.$popup_product_system_information.next(data);
  }

  popupUserInformation(data: {user_id: number}):void{
    this.$popup_user_information.next(data)
  }

  popupViewAllFeedback(data: {product_id: number}):void{
    this.$popup_view_all_feedback.next(data)
  }

  popupInformationProductDetail(data: {product_id: number}):void{
    this.$popup_information_product_detail.next(data)
  }

  popupComfirmPayment(data: {product_id: number}):void{
    this.$popup_comfirm_payment.next(data)
  }

  popupCompletePayment(data: {product_id: number}):void{
    this.$popup_complete_payment.next(data)
  }


}
