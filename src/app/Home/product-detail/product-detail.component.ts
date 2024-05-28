import { Component, OnInit } from '@angular/core';
import { BoxPopupDynamicService } from 'src/app/Dynamic/box-popup-dynamic/box-popup-dynamic.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  constructor(
    private boxPopupDynamicService : BoxPopupDynamicService
  ){}

  ngOnInit(): void {
    console.log(this.list_media[0])
  }
  list_media = ['iphone15','oppo-find-n3-flip','samsung'];

  count = 0;
  status = false;

  mainImage = this.list_media[this.count];




  onClickTransferLeft():void{
    let detect = false;

    if (this.count == 3) {
      this.count = 0
    }else if(this.count == 0 && detect == false)  {
      this.count = 1;
      detect = true;
    }

    this.mainImage = this.list_media[this.count];
    this.count +=1;
    console.log(this.count)
  }

  onClickTransferRight():void{
    let detect = false;

    if(this.count == -1){
      this.count = 2;
    }else if(this.count == 0 && detect == false){
      this.count = 3;
    } else if(this.count == 0) {
      this.count = 3;
    }
    this.count -= 1;
    this.mainImage = this.list_media[this.count];
 
    console.log(this.count)

  }

  onClickChangeMainImage(value: number):void{
    this.mainImage = this.list_media[value]
    this.count = value;
    console.log(this.count)
    console.log(value)
  }

  onClickChageStatusLike():void{
    this.status = !this.status;
  }

  onClickShowPopupAddProductCart():void{

    this.boxPopupDynamicService.popupAddProductCart({
      product_id: 1
    })
  }


}
