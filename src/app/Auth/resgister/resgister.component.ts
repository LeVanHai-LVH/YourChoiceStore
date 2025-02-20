import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})
export class ResgisterComponent {

  constructor(
    private router: Router,
  ){}
  passwordHideShow = true;

  reenterHideShow = true;

  changeHideShowPassword(){
   this.passwordHideShow = !this.passwordHideShow;
  }

  changeReenterHideShowPassword(){
    this.reenterHideShow = !this.reenterHideShow;
   }

   navigateLogin(){
    this.router.navigate(['/login']);
   }
}
