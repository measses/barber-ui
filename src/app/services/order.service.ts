import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {
  override path: string='orders';
}
