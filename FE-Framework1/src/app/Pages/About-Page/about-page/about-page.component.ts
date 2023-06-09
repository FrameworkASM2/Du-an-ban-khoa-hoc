import { Component } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
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
}
