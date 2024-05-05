import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { BodyHomePageComponent } from './Home/body-home-page/body-home-page.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ListProductComponent } from './Home/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    BodyHomePageComponent,
    FooterComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
