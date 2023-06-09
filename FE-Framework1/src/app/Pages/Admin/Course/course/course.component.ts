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
    if (confirm("Bạn có chắc muốn xóa khóa khọc này?")) {
      this.courservice.deleteCourse(id).subscribe(() => {
        // localStorage.setItem('user', JSON.stringify(user))
        // const currentUserr = JSON.parse(localStorage.getItem('user')!)
        // if (currentUserr.user.role === "admin") {
          this.course = this.course.filter(item => item._id != id)
        // }
        // this.course = this.course.filter(item => item._id != id)
      })
    }

  }
  //  ----- Search -------
  searchValue = ""
}
