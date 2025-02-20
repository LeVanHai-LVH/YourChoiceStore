import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CanceledComponent } from './canceled/canceled.component';
import { InformationComponent } from './information/information.component';
import { NotificationComponent } from './notification/notification.component';
import { ReturnComponent } from './return/return.component';
import { CompleteComponent } from './complete/complete.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'information', component: InformationComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'complete', component: CompleteComponent },
      { path: 'canceled', component: CanceledComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'return', component: ReturnComponent },
      { path: '', redirectTo: 'information', pathMatch: 'full' }, 
    ],
  },
];
@NgModule({
  declarations: [
    UserComponent,
    ShippingComponent,
    CanceledComponent,
    InformationComponent,
    NotificationComponent,
    ReturnComponent,
    CompleteComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class UserModule {
 
}
