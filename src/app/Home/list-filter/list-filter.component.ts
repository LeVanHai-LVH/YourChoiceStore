import { Component } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
  isClose = false;

  showPopupFilter(){
    this.isClose = !this.isClose;
    console.log("bac")
  }

}
