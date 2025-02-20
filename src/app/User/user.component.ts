import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  constructor(
    private router: Router,
    private location : Location,
  ){
  }
  ngOnInit(): void {
    this.findActiveLocation();
    console.log(this.active)

  }  
   active = "" ;

  findActiveLocation(){  
    this.active = this.location.path().split('/').pop() || "";
  }

  navigateInformation(){
    this.router.navigate(['/user/information'])

    this.active = 'information';
  }

  navigateNotification(){
    this.router.navigate(['/user/notification'])
    this.active = 'notification';
  }
  navigateShipping(){
    this.router.navigate(['/user/shipping'])
    this.active = 'shipping';
    
  }
  navigateComplete(){
    this.router.navigate(['/user/complete'])
    this.active = 'complete';

  }
  navigateCancled(){
    this.router.navigate(['/user/canceled'])
    this.active = 'canceled';

  }
  navigateReturn(){
    this.router.navigate(['/user/return'])
    this.active = 'return';


  }



}
