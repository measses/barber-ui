import { Component } from '@angular/core';
import { Leave } from '../../../models/leave';
import { LeaveService } from '../../../services/leave.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
  leaves:Leave[]=[]

  // @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent;
  // @ViewChild(CategoryUpdateComponent,{static:true}) updateCategoryComponent !: CategoryUpdateComponent;
  constructor(private leaveService:LeaveService){}
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.leaveService.getAll().subscribe(result=>{
      this.leaves=result.data;
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
