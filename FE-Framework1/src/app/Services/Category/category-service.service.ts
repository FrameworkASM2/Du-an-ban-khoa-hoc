import { Injectable } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:3000/category`)
  }
  removeCategory(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>(`http://localhost:3000/category/${id}`)
  }
  getcategoryById(id: number | string): Observable<ICategory> {
    return this.http.get<ICategory>(`http:localhost:3000/category/${id}`)
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:3000/category`, category)
  }
  updateCategory(category: ICategory): Observable<ICategory>{
    return this.http.put<ICategory>(`http://localhost:3000/category/${category._id}`, category)
  }
}
