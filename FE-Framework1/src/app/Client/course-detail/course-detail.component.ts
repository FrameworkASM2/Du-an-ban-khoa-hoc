import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/Services/Cart/cart.service';
import { CourseService } from 'src/app/Services/Course/course.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  product!: ICourse
  carts: any = []
  constructor(
    private productService: CourseService,
    private cartService: CartService,
    private params: ActivatedRoute,
    private router: Router,
  ) {
    this.carts = this.cartService.getCart()

    this.params.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.productService.getOneCourse(id).subscribe(data => this.product = data)
    })
  }
  addToCart(course: ICourse) {
    let index = this.carts.findIndex((item: any) => item.id === course._id);
    if (index >= 0) {
      this.carts[index].quantity += 1;
    } else {
      let cartItem: any = {
        id: course._id,
        name: course.Name,
        price: course.Price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity
        }
      }
      this.carts.push(cartItem)
    }
    // Lưu vào local storage
    let cartJson = JSON.stringify(this.carts)
    sessionStorage.setItem('cart', cartJson)
    Swal.fire({
      title: "Thêm vào giỏ hàng thành công",
      icon: 'success'
    })
    this.router.navigate(["/cart"])
  }

}
