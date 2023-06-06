import { Component } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course: ICourse[]=[];
  
  title= "Quản lí sản phẩm"
  constructor(private courservice: CourseService) {
    this.courservice.getAllCourse().subscribe(data => {
      this.course = data
    },
      error => {
        console.log(error);
      })
  }
  Remove(id: any) {
    confirm("Bạn có chắc muốn xóa khóa khọc này?")
    this.courservice.deleteCourse(id).subscribe(() => {
      
      this.course = this.course.filter(item => item._id != id)
    })
  }
}
