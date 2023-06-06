import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/Interfaces/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourse(): Observable<ICourse[]>{
    return this.http.get<ICourse[]>(`http://localhost:3000/products`)
  }
  getOneCourse(id: number| string): Observable<ICourse>{
    return this.http.get<ICourse>(`http://localhost:3000/products/${id}`)
  }
  deleteCourse(id: number| string): Observable<ICourse>{
    return this.http.delete<ICourse>(`http://localhost:3000/products/${id}`)
  }
  addCourse(product: ICourse): Observable<ICourse>{
    return this.http.post<ICourse>(`http://localhost:3000/products`, product)
  }
  updateCourse(product: ICourse): Observable<ICourse>{
    return this.http.put<ICourse>(`http://localhost:3000/products/${product._id}`, product)
  }
}
