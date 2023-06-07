import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminCourseComponent } from './Pages/Admin/admin-course/admin-course.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layouts/base-layout/base-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './Components/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Admin-Category/admin-category/admin-category.component';
import { AddCategoryComponent } from './Pages/Admin/Category/Add-category/add-category/add-category.component'
import { AddCourseComponent } from './Pages/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/update-course/update-course.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminCourseComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    CourseComponent,
    AdminCategoryComponent,
    AddCategoryComponent,
    AddCourseComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
