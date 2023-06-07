import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categories: ICategory = {
    Name: ""
  }
  constructor(private categoryServices: CategoryService,
    private router: Router) {

  }
  onHandleSubmit() {
    this.categoryServices.addCategory(this.categories).subscribe(() => {
      alert("Bạn đã thêm danh mục thành công")
      this.router.navigate(['/admin/category'])

    },
      error => {
        alert("Có lỗi khi xảy ra thêm danh mục")
        console.log(error);

      })





  }

}
