import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../../../services/leave.service';
import { LeaveAddComponent } from './leave-add/leave-add.component';
import { Leave } from '../../../../models/leave';
import { LeaveUpdateComponent } from './leave-update/leave-update.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, LeaveAddComponent, LeaveUpdateComponent],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent implements OnInit {
  leaves:Leave[]=[]
  userLeaveById:Leave|undefined
   @ViewChild(LeaveAddComponent,{static:true}) addLeaveComponent !: LeaveAddComponent;
  @ViewChild(LeaveUpdateComponent,{static:true}) updateLeaveComponent !: LeaveUpdateComponent;
  constructor(
    private leaveService:LeaveService,
    private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.getLeaveById(param["id"]);
    })
  }

 getLeaveById(userId:number){
    this.leaveService.getById(userId).subscribe(result=>{
      this.userLeaveById = result.data
    })
  }

  showAddModal(){
    this.addLeaveComponent.createCreateForm();
  }
  showEditModal(leave:Leave|null){
    if(leave==null) return;
    this.updateLeaveComponent.createUpdateForm(leave);
  }
  // deleteCategoryById(id:number){
  //   this.categoryService.deleteById(id).subscribe(result=>{
  //     this.getList();
  //   })
  // }
}
