import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { CategoryService } from 'src/app/Services/Category/category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categories: ICategory = {
    Name: ""
  }
  constructor(private categoryServices: CategoryService) {

  }
  onHandleSubmit() {
    this.categoryServices.addCategory(this.categories).subscribe(category => {
      alert("Bạn đã thêm danh mục thành công")



    })
  }

}
