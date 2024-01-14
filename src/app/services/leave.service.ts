import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { Leave } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService extends BaseService<Leave> {
  UserWithLeave(userId: number) {
    throw new Error('Method not implemented.');
  }
  override path: string='leaves';
}
