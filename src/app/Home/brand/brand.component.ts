import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  constructor(private router:Router){}

  onClickNavigateBrand(brand_name: string):void{
    console.log(brand_name)
    this.router.navigate(['/brand', '${brand_name}'])
  }
}
