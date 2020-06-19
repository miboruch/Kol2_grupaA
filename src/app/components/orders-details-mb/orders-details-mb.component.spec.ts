import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMBComponent } from './orders-details-mb.component';

describe('OrdersDetailsMBComponent', () => {
  let component: OrdersDetailsMBComponent;
  let fixture: ComponentFixture<OrdersDetailsMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
