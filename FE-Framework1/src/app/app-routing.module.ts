import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './Layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseListComponent } from './Components/course-list/course-list.component';
import { AddCourseComponent } from './Pages/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/update-course/update-course.component';
const routes: Routes = [
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            {path: "", redirectTo: "dashboard", pathMatch: "full"},
            {path: "dashboard", component: DashboardComponent},
            {path: "course", component: CourseListComponent},
            // {path: "course/add", component: AddCourseComponent},
            // {path: "course/:id/edit", component: UpdateCourseComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
