import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  category: ICategory = {
    Name: "",
  }
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ){
    // this.route.paramMap.subscribe(params => {
    //   const id = String(params.get('id'))
    //   this.categoryService.getcategoryById(id).subscribe(data => this.category = data)
    // })
    this.route.paramMap.subscribe(param =>{
      const id = String(param.get('id'));
      this.categoryService.getcategoryById(id).subscribe(category => {
        this.category = category;
      }, error => console.log(error.message))
    })
  }
  onHandleSubmit() {
    this.categoryService.updateCategory(this.category).subscribe(category =>{
      console.log(category);
    })
  }
}
