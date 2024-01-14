import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule,AppointmentAddComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  appointments:Appointment[]=[]

  @ViewChild(AppointmentAddComponent,{static:true}) addAppointmentComponent !: AppointmentAddComponent;
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

  showAddModal(){
    this.addAppointmentComponent.createCreateForm();
  }
  // showEditModal(category:Appointment|null){
  //   if(category==null) return;
  //   this.updateCategoryComponent.createUpdateForm(category);
  // }
  // deleteCategoryById(id:number){
  //   this.categoryService.deleteById(id).subscribe(result=>{
  //     this.getList();
  //   })
  // }
}

