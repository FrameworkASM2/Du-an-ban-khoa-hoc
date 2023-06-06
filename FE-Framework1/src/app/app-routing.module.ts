import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseComponent } from './Components/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Admin-Category/admin-category/admin-category.component';
import { AddCourseComponent } from './Pages/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/update-course/update-course.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "course", component: CourseComponent },
      { path: "course/add", component: AddCourseComponent },
      { path: "course/:id/edit", component: UpdateCourseComponent },
      //=== Category ===
      { path: "category", component: AdminCategoryComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
