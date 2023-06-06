import { Component } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  course: ICourse[] = []
  title = "Quản lí sản phẩm"

  constructor(private courseService: CourseService) {
    this.courseService.getAllCourse().subscribe(data => {
      this.course = data
    },
      error => {
        console.log(error);

      })
  }
  Remove(id: any){
    this.courseService.deleteCourse(id).subscribe(()=>{
      this.course = this.course.filter(item => item._id !=id)
    })
  }
}