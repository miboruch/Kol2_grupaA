import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-item-mb',
  templateUrl: './orders-item-mb.component.html',
  styleUrls: ['./orders-item-mb.component.css']
})
export class OrdersItemMBComponent implements OnInit {

  @Input() id: number;
  @Input() image: string;
  @Input() price: number;
  @Input() text: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
