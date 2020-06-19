import { Component, OnInit } from '@angular/core';
import {MBDataService} from "../../services/mb-data.service";

@Component({
  selector: 'app-orders-mb',
  templateUrl: './orders-mb.component.html',
  styleUrls: ['./orders-mb.component.css']
})
export class OrdersMBComponent implements OnInit {

  public elements: any;

  constructor(private service: MBDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.elements = response;
    });
  }

}
