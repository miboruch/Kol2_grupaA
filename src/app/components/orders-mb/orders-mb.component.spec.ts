import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMBComponent } from './orders-mb.component';

describe('OrdersMBComponent', () => {
  let component: OrdersMBComponent;
  let fixture: ComponentFixture<OrdersMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
