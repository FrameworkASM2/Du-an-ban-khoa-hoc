import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any[] = []
  constructor(private cartService: CartService) {
    this.carts = this.getCart();
  }
  getCart(): any {
    // Lưu vào local storage
    let cartJson = sessionStorage.getItem('cart')
    if (cartJson) {
      return JSON.parse(cartJson)
    } else {
      return []
    }
  }
  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }
  subtotal(cart: any) {
    return cart.quantity * cart.price
  }
  removeItem(item: any): void {
    const index = this.carts.indexOf(item);
    if (index >= 0) {
      this.carts.splice(index, 1);
      let cartJson = JSON.stringify(this.carts);
      sessionStorage.setItem('cart', cartJson);

    }
  }
  clearCart(): void {
    sessionStorage.removeItem('cart')
    this.carts = []
  }
}

