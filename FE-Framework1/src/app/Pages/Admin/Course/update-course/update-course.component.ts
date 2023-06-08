import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) {

    this.categoryService.getCategory().subscribe(data => {
      this.categories = data
    }, error => console.log(error)
    )

   
    this.route.paramMap.subscribe(param => {
      // const id = Number(route.snapshot.params.['_id'])
      const id = Number(param.get('_id'))
      console.log(id);
      this.courseService.getOneCourse(id).subscribe(data => {
        console.log(data);
        this.course = data
      }, error => console.log(error.message)
      )
    })
  }

  onHandleSubmit() {
    this.courseService.updateCourse(this.course).subscribe(item => {
      console.log(item);
      if(!item){
        confirm("Cập nhật sản phẩm thất bại")
      }
      confirm("Cập nhật sản phẩm thành công")
    })
  }
}
