import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

import { UserForCreateDto } from '../../../../dtos/user-for-create-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent implements OnInit {
  addUserForm!:FormGroup

  constructor(
    private formbuilder:FormBuilder,
    private userService:UserService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.createAddUserForm();
  }


  createAddUserForm(){
    this.addUserForm= this.formbuilder.group({
      imageUrl:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  addUser(){
        //TODO return düzenlenicek ve subs işlemi logtan  sonra düzenle
    if(!this.addUserForm.valid) return;
    let newUser:UserForCreateDto=Object.assign(this.addUserForm.value, //formdan->user çekme işlemi burdan yapılıyor
      {
        createdAt:null,
        createdUser:null,
        updatedAt:null,
        updatedUser:null,
        isUpdated:null,
        deletedAt:null,
        deletedUser:null,
      }

      );
    this.userService.addUser(newUser).subscribe(result=>{
      console.log(result);
      this.router.navigateByUrl("/admin/users")
    })
  }
}
