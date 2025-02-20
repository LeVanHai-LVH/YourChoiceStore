import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router : Router
  ){}



  onClickNavigateHome():void{
    this.router.navigate([`/home`])
  }

  onClickNavigateCart():void{
    this.router.navigate([`/cart`])
  }

  onClickNavigateInformation():void{
    this.router.navigate([`/user/information`])
  }
}
