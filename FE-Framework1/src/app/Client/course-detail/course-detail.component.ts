import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  product!: ICourse
  constructor(
    private productService: CourseService,
    private params: ActivatedRoute
  ) {
    this.params.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.productService.getOneCourse(id).subscribe(data => this.product = data)
    })
  }

}
