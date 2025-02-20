import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-complete-payment',
  templateUrl: './popup-complete-payment.component.html',
  styleUrls: ['./popup-complete-payment.component.scss']
})
export class PopupCompletePaymentComponent {
  constructor(
    private router: Router
  ){}
    @Output() close_popup = new EventEmitter<boolean>();
  
    onClickClosePopup():void{
      this.close_popup.emit(true);
    }

    onClickNavigateHome(){
      this.onClickClosePopup();
      this.router.navigate(['home']);
    }
}
