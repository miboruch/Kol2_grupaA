import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersMBComponent} from "./components/orders-mb/orders-mb.component";
import {OrdersDetailsMBComponent} from "./components/orders-details-mb/orders-details-mb.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersMBComponent
  },
  {
    path: 'details/:id',
    component: OrdersDetailsMBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
