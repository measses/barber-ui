import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { LeaveService } from '../../../../../services/leave.service';
import { Leave } from '../../../../../models/leave';

@Component({
  selector: 'app-leave-update',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './leave-update.component.html',
  styleUrl: './leave-update.component.scss'
})
export class LeaveUpdateComponent {
  updateForm!:FormGroup;
  @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private leaveService:LeaveService){}

  createUpdateForm(leave:Leave){
    this.updateForm=this.formBuilder.group({
      startDate:[leave.startDate,Validators.required],
      endDate:[leave.endDate,Validators.required],
    })
  }
  onSubmit(){
    if(!this.updateForm.valid){
      this.toastrService.warning("Please check the form.","Warning");
      return;
    }
    let leave:Leave=Object.assign({},this.updateForm.value);
    this.leaveService.update(leave).subscribe(result=>{
      if(typeof document ==undefined) return;
      document.querySelector(".edit-modal")?.classList.toggle("show");
      document.querySelector(".modal-backdrop")?.classList.toggle("show");
      this.onLoad.emit();
    })
  }
}
