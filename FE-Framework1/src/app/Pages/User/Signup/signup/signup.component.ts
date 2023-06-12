import { Component } from '@angular/core';
import { IUser } from 'src/app/Interfaces/Users';
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: IUser = {
    Name: "",
    Email: "",
    Password: ""
  }
  constructor(private userService: UserService,
    private router: Router) { }
  onHandleSubmit() {
    if (!this.signup.Name || !this.signup.Email || !this.signup.Password) {
      // Hiển thị thông báo lỗi nếu các trường không được nhập đầy đủ
      alert("Vui lòng điền đầy đủ thông tin.")
      return;
    }
    
    this.userService.signup(this.signup).subscribe(() => {
      alert('Bạn đã đăng kí thành công')

      this.router.navigate(['/signin'])
    },
      error => {
        alert("Có lỗi khi xảy ra khi đăng kí")
        console.log(error);

      })
  }

}
