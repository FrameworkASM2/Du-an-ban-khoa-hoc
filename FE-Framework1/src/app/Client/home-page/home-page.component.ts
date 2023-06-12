import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/Category';
import { ICourse } from 'src/app/Interfaces/Course';
import { CategoryService } from 'src/app/Services/Category/category-service.service';
import { CourseService } from 'src/app/Services/Course/course.service';
import { CartService } from 'src/app/Services/Cart/cart.service';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  course: ICourse[] = [];
  carts: any = []
  title = ""
  constructor(private courservice: CourseService,
    private cartService: CartService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.carts = this.cartService.getCart()
    this.courservice.getAllCourse(10).subscribe(data => {
      this.course = data
    },
      error => {
        console.log(error);
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
