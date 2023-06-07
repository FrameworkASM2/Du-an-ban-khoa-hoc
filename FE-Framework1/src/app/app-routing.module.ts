import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseComponent } from './Pages/Admin/Course/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Category/admin-category/admin-category.component';
import { AddCategoryComponent } from "./Pages/Admin/Category/Add-category/add-category/add-category.component";
import { AddCourseComponent } from './Pages/Admin/Course/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/Admin/Course/update-course/update-course.component';
import { EditCategoryComponent } from "./Pages/Admin/Category/edit-category/edit-category.component";


const routes: Routes = [
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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
