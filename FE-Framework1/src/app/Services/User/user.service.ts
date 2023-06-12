import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8080/api/signup`, user)
  }
  signin(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8080/api/signin`, user)
  }
  getAcount(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:8080/api/signin`)
  }

}
