import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MBDataService {
  private url:string = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/api/order/items`)
  }

  getById(id) {
    if(id >= 1 && id <= 3){
      return this.http.get(`${this.url}/api/order/items/${id}`)
    }
  }
}
