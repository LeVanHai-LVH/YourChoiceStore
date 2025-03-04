import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { BodyHomePageComponent } from './Home/body-home-page/body-home-page.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ListProductComponent } from './Home/list-product/list-product.component';
import { BannerComponent } from './Home/banner/banner.component';
import { BrandComponent } from './Home/brand/brand.component';
import { ProductComponent } from './Home/product/product.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListProductBrandComponent } from './Home/list-product-brand/list-product-brand.component';
import { ListFilterComponent } from './Home/list-filter/list-filter.component';
import { DropdownComponent } from './Home/dropdown/dropdown.component';
import { ProductDetailComponent } from './Home/product-detail/product-detail.component';
import { BoxPopupDynamicComponent } from './Dynamic/box-popup-dynamic/box-popup-dynamic.component';

import { CartComponent } from './Home/cart/cart.component';
import { LoginComponent } from './Auth/login/login.component';
import { ResgisterComponent } from './Auth/resgister/resgister.component';
import { PopupModule } from './popup/popup.module';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './User/user.module';
import { UserComponent } from './User/user.component';
import { ClickOutSideDirective } from './Directives/click-out-side.directive';
import { PopupConfirmPaymentComponent } from './popup/popup-confirm-payment/popup-confirm-payment.component';
import { PopupCompletePaymentComponent } from './popup/popup-complete-payment/popup-complete-payment.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePageComponent,

  },
  {
    path: 'home',
    component: BodyHomePageComponent
  },
  {
    path: 'brand/:name',
    component: ListProductBrandComponent
  },
  {
    path: 'product-detail/:product_name',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: ResgisterComponent
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BodyHomePageComponent,
    FooterComponent,
    ListProductComponent,
    NavbarComponent,
    BannerComponent,
    BrandComponent,
    ProductComponent,
    ListProductBrandComponent,
    ListFilterComponent,
    DropdownComponent,
    ProductDetailComponent,
    BoxPopupDynamicComponent,
    CartComponent,
    LoginComponent,
    ResgisterComponent,
    ClickOutSideDirective,


  ],
  imports: [
    BrowserModule,
    PopupModule,
    CommentsModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
