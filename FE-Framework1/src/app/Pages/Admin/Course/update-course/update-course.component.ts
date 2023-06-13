import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Interfaces/Category';
import { ICourse } from 'src/app/Interfaces/Course';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
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
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private routerNavigate: Router
  ) {

    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    }, error => console.log(error)
    )

    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.courseService.getOneCourse(id).subscribe(data => this.course = data)
    })
  }

  onHandleSubmit() {
    this.courseService.updateCourse(this.course).subscribe(item => {
      console.log(item);
      if (!item) {
        confirm("Cập nhật sản phẩm thất bại")
      } else {
        confirm("Cập nhật sản phẩm thành công")
        // this.routerNavigate.nagigate(['/admin/course'])
      }
    })
  }
}
