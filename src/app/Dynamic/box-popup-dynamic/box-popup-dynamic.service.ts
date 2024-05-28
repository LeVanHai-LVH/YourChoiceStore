import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxPopupDynamicService {

  private readonly $popup_system_information = new Subject<{product_id : number}>();
  readonly popup_system_information$ = this.$popup_system_information.asObservable();

  private readonly $popup_add_product_cart = new Subject<{product_id : number}>();
  readonly popup_add_product_cart$ = this.$popup_add_product_cart.asObservable();

  private readonly $popup_product_system_information = new Subject<{product_id : number}>();
  readonly popup_product_system_information$ = this.$popup_product_system_information.asObservable();

  popupSystemInformaytion(data: {product_id: number}):void{
    this.$popup_system_information.next(data);
  }

  popupAddProductCart(data: {product_id: number}):void{
    this.$popup_add_product_cart.next(data);
  }

  popupProductSystemInformation(data: {product_id: number}):void{
    this.$popup_product_system_information.next(data);
  }


}
