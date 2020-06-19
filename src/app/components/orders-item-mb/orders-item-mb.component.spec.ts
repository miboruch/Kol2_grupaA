import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMBComponent } from './orders-item-mb.component';

describe('OrdersItemMBComponent', () => {
  let component: OrdersItemMBComponent;
  let fixture: ComponentFixture<OrdersItemMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
