import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  appointments:Appointment[]=[]

  // @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent;
  // @ViewChild(CategoryUpdateComponent,{static:true}) updateCategoryComponent !: CategoryUpdateComponent;
  constructor(private appointmentService:AppointmentService){}
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.appointmentService.getAll().subscribe(result=>{
      this.appointments=result.data;
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

