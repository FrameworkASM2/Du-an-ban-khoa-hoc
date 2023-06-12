import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseComponent } from './Pages/Admin/Course/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Category/admin-category/admin-category.component';
import { AddCategoryComponent } from "./Pages/Admin/Category/Add-category/add-category/add-category.component";
import { AddCourseComponent } from './Pages/Admin/Course/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/Admin/Course/update-course/update-course.component';
import { EditCategoryComponent } from "./Pages/Admin/Category/edit-category/edit-category.component";
import { SignupComponent } from "./Pages/User/Signup/signup/signup.component";
import { SigninComponent } from "./Pages/User/Signin/signin/signin.component";
import { HomePageComponent } from "./Client/home-page/home-page.component";
import { CourseDetailComponent } from "./Client/course-detail/course-detail.component";
import { ListCourseComponent } from "./Pages/Course/list-course/list-course.component";
import { BaseLayoutComponent } from "./Layouts/base-layout/base-layout.component";
import { AboutPageComponent } from "./Pages/About-Page/about-page/about-page.component";
import { ContactPageComponent } from "./Pages/Contact-Page/contact-page/contact-page.component";
import { CartComponent } from "./Pages/Cart/cart/cart.component";
// import { HomePageComponent } from "./Pages/home-page/home-page.component";


const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "course", component: ListCourseComponent },
      { path: "course/:id", component: CourseDetailComponent },
      { path: "about", component: AboutPageComponent },
      { path: "contact", component: ContactPageComponent },
      { path: "cart", component: CartComponent }


    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      //       === Course ===
      { path: "course", component: CourseComponent },
      { path: "course/add", component: AddCourseComponent },
      { path: "course/:id/edit", component: UpdateCourseComponent },

      //      === Category ===
      { path: "category", component: AdminCategoryComponent },
      { path: "category/add", component: AddCategoryComponent },
      { path: "category/edit/:id", component: EditCategoryComponent }
    ]
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
