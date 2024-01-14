import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LeaveService } from '../../../../../services/leave.service';
import { Leave } from '../../../../../models/leave';


@Component({
  selector: 'app-leave-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './leave-add.component.html',
  styleUrl: './leave-add.component.scss'
})
export class LeaveAddComponent {
  createForm!:FormGroup
  @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private leaveService:LeaveService){}

  createCreateForm(){
    this.createForm=this.formBuilder.group({
      startDate:['',Validators.required],
      endDate:['',Validators.required],

    })
  }
  onSubmit(){
    if(!this.createForm.valid){
      this.toastrService.warning("Please check the form.","Warning");
      return;
    }
    let leave:Leave=Object.assign({},this.createForm.value);
    this.leaveService.create(leave).subscribe(result=>{
      if(typeof document ==undefined) return;
      document.querySelector(".create-modal")?.classList.toggle("show");
      document.querySelector(".modal-backdrop")?.classList.toggle("show");
      this.onLoad.emit();
    })
  }
}
