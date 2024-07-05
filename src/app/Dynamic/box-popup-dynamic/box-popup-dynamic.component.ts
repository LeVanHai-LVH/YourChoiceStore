import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SubSink } from 'subsink';
import { BoxPopupDynamicService } from './box-popup-dynamic.service';
import { take } from 'rxjs';
import { PopupAddProductCartComponent } from 'src/app/popup/popup-add-product-cart/popup-add-product-cart.component';
import { PopupLikeProductComponent } from 'src/app/popup/popup-like-product/popup-like-product.component';

@Component({
  selector: 'app-box-popup-dynamic',
  templateUrl: './box-popup-dynamic.component.html',
  styleUrls: ['./box-popup-dynamic.component.scss']
})
export class BoxPopupDynamicComponent implements OnInit, OnDestroy{

  constructor(
    private service: BoxPopupDynamicService
  ){}

  @ViewChild('popup_like', {read: ViewContainerRef, static: false})
  popup_like: ViewContainerRef | null = null;

  @ViewChild('popup_add_product_cart', {read: ViewContainerRef, static: false})
  popup_add_product_cart: ViewContainerRef | null = null;

  @ViewChild('popup_product_system_information', {read: ViewContainerRef, static: false})
  popup_product_system_information: ViewContainerRef | null = null;

  @ViewChild('popup_user_information', {read: ViewContainerRef, static: false})
  popup_user_information: ViewContainerRef | null = null;

  private subs = new SubSink();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.onGetPopupAddProductCart();
    this.onGetPopupLike();
  }


  onGetPopupSystemInformation():void{
      this.subs.add(
        this.service.popup_product_system_information$.subscribe(data =>{

        })
      )
  }

  onGetPopupUserInformation():void{
    this.subs.add(
      this.service.popup_user_information$.subscribe(data =>{

      })
    )
}

  onGetPopupLike():void{
    this.subs.add(
      this.service.popup_like$.subscribe(data =>{
        this.loadDynamicComponentPopupLike(data)
      })
    )
  }

  onGetPopupAddProductCart():void{
    this.subs.add(
      this.service.popup_add_product_cart$.subscribe(data =>{
        this.loadDynamicComponentPopupAddProductCart(data)
      })
    )
}

  // async loadDynamicComponentPopupSystemInformation(data: {product_id: number}): Promise<void>{
  //   if(!this.popup_system_information_component_ref) return;
  //   const component = this.popup_system_information_component_ref.createComponent(PopupSystemInformationComponent);
  //   this.subs.add(
  //     component.instance.close_popup.pipe(take(1)).subscribe(data =>{
  //       component.destroy;
  //     })
  //   )
  // }

    async loadDynamicComponentPopupAddProductCart(data: {product_id: number}): Promise<void>{
    if(!this.popup_add_product_cart) return;
    const component = this.popup_add_product_cart.createComponent(PopupAddProductCartComponent);
    this.subs.add(
      component.instance.close_popup.pipe(take(1)).subscribe(data =>{
        component.destroy();
      })
    )
  }

  async loadDynamicComponentPopupProductSystemInformation(data: {product_id: number}): Promise<void>{
    if(!this.popup_product_system_information) return;
    const component = this.popup_product_system_information.createComponent(PopupAddProductCartComponent);
    this.subs.add(
      component.instance.close_popup.pipe(take(1)).subscribe(data =>{
        component.destroy();
      })
    )
  }

  async loadDynamicComponentPopupLike(data: {product_id: number}): Promise<void>{
    if(!this.popup_like) return;
    const component = this.popup_like.createComponent(PopupLikeProductComponent);
    this.subs.add(
      component.instance.close_popup.pipe(take(1)).subscribe(data =>{
        component.destroy();
      })
    )
  }
}
