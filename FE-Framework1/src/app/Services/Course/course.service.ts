import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/Interfaces/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourse(_limit: Number = 4): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`http://localhost:8080/api/products/?_sort=id&_limit=${_limit}&_order=desc`
    )
  }
  getOneCourse(id: number | string): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:8080/api/products/${id}`)
  }
  deleteCourse(id: number): Observable<ICourse> {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!);
    console.log(accessToken);

    return this.http.delete<ICourse>(`http://localhost:8080/api/products/${id}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    )
  }
  addCourse(product: ICourse): Observable<ICourse> {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!);
    console.log(accessToken);

    return this.http.post<ICourse>(`http://localhost:8080/api/products`, product,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    )
  }
  updateCourse(product: ICourse): Observable<ICourse> {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!);
    console.log(accessToken);
    return this.http.put<ICourse>(`http://localhost:8080/api/products/${product._id}`, product,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    )
  }
}
