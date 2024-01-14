import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Photo } from '../../../models/photo';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  photos:Photo[]=[]

  // @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent;
  // @ViewChild(CategoryUpdateComponent,{static:true}) updateCategoryComponent !: CategoryUpdateComponent;
  constructor(private photoService:PhotoService){}
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.photoService.getAll().subscribe(result=>{
      this.photos=result.data;
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
