import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { CategoryService } from 'src/app/Services/Category/category-service.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {

  categories: ICategory[] = []
  title = "Quản lí danh mục"
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    }, error => console.log(error)
    )
  }
  Remove(id: any) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không")) {
      this.categoryService.removeCategory(id).subscribe(() => {
        this.categories = this.categories.filter(item => item.id != id)
      })
    }
  }
}
