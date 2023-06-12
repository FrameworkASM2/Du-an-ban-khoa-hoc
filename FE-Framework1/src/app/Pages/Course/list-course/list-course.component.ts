import { Component } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent {
  courses: ICourse[] = [];
  p: number = 1
  // pageSize: number = 10;
  // page: number = 1;
  // // totalItems: number;
  // config: any = {
  //   id: 'custom-pagination',
  //   maxSize: 5,
  //   directionLinks: true,
  //   autoHide: false


  // }
  constructor(private courseService: CourseService) {
    this.courseService.getAllCourse(4).subscribe((course) => {
      this.courses = course
    },
      error => {
        console.log(error);

      })
  }

}
