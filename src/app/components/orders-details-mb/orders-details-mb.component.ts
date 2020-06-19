import {Component, OnInit} from '@angular/core';
import {MBDataService} from "../../services/mb-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-mb',
  templateUrl: './orders-details-mb.component.html',
  styleUrls: ['./orders-details-mb.component.css']
})

export class OrdersDetailsMBComponent implements OnInit {
  public id: number;
  public image: string;
  public price: number;
  public text: string;
  public title: string;

  constructor(private service: MBDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string | number;
    this.route.paramMap.subscribe(params => id = params.get('id'));

    if(+id >= 1 && +id <= 3){
      this.service.getById(id).subscribe(response => {
        this.id = response.id;
        this.image = response.image;
        this.price = response.price;
        this.text = response.text;
        this.title = response.title;
      })
    }
  }
}
