import { Component } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { ICourse } from 'src/app/Interfaces/Course';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  course: ICourse[] = [];
  categories: ICategory[] = [];

  title = ""
  constructor(
    private courseService: CourseService, 
    private categoryService: CategoryService
    ){
    this.courseService.getAllCourse(10).subscribe(data => {
      this.course = data;
    }, error => {
      console.log(error);
    });

    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
    });
  }

}
