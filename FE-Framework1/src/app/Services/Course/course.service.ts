import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/Interfaces/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourse(_limit: Number = 4, search_key: String = ""): Observable<ICourse[]> {
    let url = `http://localhost:8080/api/products/?_sort=id&_limit=${_limit}&_order=desc`
    if(search_key != ""){
      url += `&name_like=${search_key}`
    }
    return this.http.get<ICourse[]>(url)
  }
  getOneCourse(id: number | string): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:8080/api/products/${id}`)
  }
  deleteCourse(id: number | string): Observable<ICourse> {
    return this.http.delete<ICourse>(`http://localhost:8080/api/products/${id}`)
  }
  addCourse(product: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(`http://localhost:8080/api/products`, product)
  }
  updateCourse(product: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(`http://localhost:8080/api/products/${product._id}`, product)
  }
}
