import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { ICourse } from 'src/app/Interfaces/Course';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: ICourse = {
    Name: "",
    Price: 0,
    Image: "",
    Description: "",
    categoryId: ""
  }

  categories: ICategory[] = []

  constructor(
    private courseService: CourseService,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    }, error => console.log(error)
    )
  }

  onHandleSubmit() {
    this.courseService.addCourse(this.course).subscribe(item => {
      console.log(item);
      confirm("Them san pham thanh cong")
    })
  }
}
