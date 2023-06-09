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
  constructor(private courseService: CourseService) {
    this.courseService.getAllCourse(4).subscribe((course) => {
      this.courses = course
    },
      error => {
        console.log(error);

      })
  }

}
