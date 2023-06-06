import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseComponent } from './Components/course/course.component';

const routes: Routes = [
    {path: 'admin', component: AdminLayoutComponent, children:[
        {path: "", redirectTo: "dashboard", pathMatch: "full"},
        {path: "dashboard", component: DashboardComponent},
        {path: "course", component: CourseComponent}
        
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }