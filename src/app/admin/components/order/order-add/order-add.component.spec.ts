import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddComponent } from './order-add.component';

describe('OrderAddComponent', () => {
  let component: OrderAddComponent;
  let fixture: ComponentFixture<OrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
