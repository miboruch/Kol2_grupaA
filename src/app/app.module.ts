import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersMBComponent } from './components/orders-mb/orders-mb.component';
import { OrdersItemMBComponent } from './components/orders-item-mb/orders-item-mb.component';
import { OrdersDetailsMBComponent } from './components/orders-details-mb/orders-details-mb.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {MBDataService} from "./services/mb-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersMBComponent,
    OrdersItemMBComponent,
    OrdersDetailsMBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MBDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
