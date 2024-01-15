import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order';
import { OrderAddComponent } from './order-add/order-add.component';
import { Product } from '../../../models/product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, OrderAddComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  createForm!:FormGroup
  orders:Order[]=[]
  @Input()   selectedProducts: Product[] = [];

@ViewChild(OrderAddComponent,{static:true}) addOrderComponent !: OrderAddComponent;
  // @ViewChild(CategoryUpdateComponent,{static:true}) updateCategoryComponent !: CategoryUpdateComponent;
  constructor(private orderService:OrderService){}
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.orderService.getAll().subscribe(result=>{
      this.orders=result.data;
    });
  }

  // showAddModal(){
  //   this.addOrderComponent.createCreateForm();
  // }
  // showEditModal(category:Category|null){
  //   if(category==null) return;
  //   this.updateCategoryComponent.createUpdateForm(category);
  // }
  // deleteCategoryById(id:number){
  //   this.categoryService.deleteById(id).subscribe(result=>{
  //     this.getList();
  //   })
  // }
}
