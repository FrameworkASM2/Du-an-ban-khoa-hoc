import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course: ICourse[] = [];
  p: number = 1
  title = "Quản lí sản phẩm"
  constructor(private courservice: CourseService) {
    this.courservice.getAllCourse(10).subscribe(data => {
      this.course = data
    },
      error => {
        console.log(error);
      })
  }
  Remove(id: any) {
    if (confirm("Bạn có chắc muốn xóa khóa học này?")) {
      this.courservice.deleteCourse(id).subscribe(() => {
          this.course = this.course.filter(item => item._id !== id)
      })
    }

  }
  //  ----- Search -------
  searchValue = ""
}
