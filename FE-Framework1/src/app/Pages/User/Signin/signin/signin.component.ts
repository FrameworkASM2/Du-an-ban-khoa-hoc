import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/Users';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin: IUser = {
    Email: "",
    Password: ""
  }
  constructor(private signinService: UserService,
    private router: Router) { }
  onHandleSubmit() {
    this.signinService.signin(this.signin).subscribe((user) => {
      //Lưu trữ thông tin vào LocalStỏage
      localStorage.setItem('user', JSON.stringify(user))
      const currentUserr = JSON.parse(localStorage.getItem('user')!)
      if (currentUserr.user.role === "admin") {
        alert("Bạn đã đăng nhập thành công Admin")
        this.router.navigate(['/admin'])
      }
      else {
        alert("Bạn đã đăng nhập thành công")
        // this.router.navigate(['/admin'])
      }



    })
  }

}
