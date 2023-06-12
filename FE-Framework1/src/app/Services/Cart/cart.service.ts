import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getCart() {
    // Lưu vào local storage
    let cartJson = sessionStorage.getItem('cart')
    if (cartJson) {
      return JSON.parse(cartJson)
    } else {
      return []
    }
  }

}
