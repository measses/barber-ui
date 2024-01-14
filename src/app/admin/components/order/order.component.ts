import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orders:Order[]=[]

  // @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent;
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
  //   this.addCategoryComponent.createCreateForm();
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
