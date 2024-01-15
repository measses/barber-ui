import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule,AppointmentAddComponent, AppointmentUpdateComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  appointments:Appointment[]=[];
  selectedAppointment!:Appointment;
  users:User[]=[]
  @ViewChild(AppointmentAddComponent,{static:true}) addAppointmentComponent!: AppointmentAddComponent
  @ViewChild(AppointmentUpdateComponent,{static:true}) updateAppointmentComponent!:AppointmentUpdateComponent
  constructor(private appointmentService:AppointmentService,private userService:UserService){}


  ngOnInit(): void {
    this.getList();
    this.getUserList();
  }
  getList(){
    this.appointmentService.getAll().subscribe(res=>{
      this.appointments=res.data;
    });
  }
  findUserById(userId: number) {
    return this.users.find(user => user.id === userId);
  }
  getUserList(){
    this.userService.getAll().subscribe(res=>{
      this.users=res.data
    })
  }
  showAddModal(){
    this.addAppointmentComponent.createCreateForm();
  }
  showEditModal(appointment:Appointment|null){
    if(appointment==null) return;
    this.updateAppointmentComponent.createUpdateForm(appointment);
  }
  deleteAppointmentById(id:number){
    this.appointmentService.deleteById(id).subscribe(res=>{
      this.getList();
    })
  }
}

