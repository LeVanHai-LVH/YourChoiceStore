import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(
    private router: Router
  ){}

  @Input() product_id: number | undefined;

  onClickNavigateProuctDetail():void{
    this.router.navigate([`/product-detail/${this.product_id}`])
  }
}
