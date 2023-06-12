import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Interfaces/Category';
import { ICourse } from 'src/app/Interfaces/Course';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent {
  courses: ICourse[] = [];
  categories: ICategory[] = []
  // catId: any;
  constructor(
    private courseService: CourseService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) {
    this.courseService.getAllCourse(4).subscribe((course) => {
      this.courses = course
    },
      error => {
        console.log(error);

      }),
      this.categoryService.getCategory().subscribe(data => {
        this.categories = data
      },
        error => {
          console.log(error);

        })

    // this.route.paramMap.subscribe(param => {
    //   const catId = Number(param.get('_id'));
    //   // this.categoryService.getcategoryById(id).subscribe(category => {
    //   //   this.category = category;
    //   this.getProductCatId(catId)

    // }, error => console.log(error.message))
  }

  // getProductCatId(id: any) {
  //   this.courseService.getAllCourseByCat(id).subscribe((product) => {
  //     this.courses = product
  //   })
  // }

  searchValue = ""

}
