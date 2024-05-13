import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.list_media[0])
  }
  list_media = ['iphone15','oppo-find-n3-flip','samsung'];

  count = 0;

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


}
