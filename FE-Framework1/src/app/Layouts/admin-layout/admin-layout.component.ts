import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/Interfaces/Course';
import { CourseService } from 'src/app/Services/Course/course.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  //  ----- Search -------
  constructor(private courservice: CourseService) {
    this.courservice.getAllCourse().subscribe(data => {
      this.course = data
    },
      error => {
        console.log(error);
      })
  }
  fethData = (value: any) => {
    const results = this.course.filter((data: any) => {
      return (value && data && data.name.toLowerCase().includes(value))
    })
    this.course = this.course
  }
  @Input() course !: ICourse[]
  @Output() onRemove = new EventEmitter<number>()
  valueInput: string = ""
  setValue(e: any) {
    this.valueInput = e.target.value
  }
}
