import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layouts/base-layout/base-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './Pages/Admin/Course/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Category/admin-category/admin-category.component';
import { AddCategoryComponent } from './Pages/Admin/Category/Add-category/add-category/add-category.component'
import { AddCourseComponent } from './Pages/Admin/Course/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/Admin/Course/update-course/update-course.component';
import { EditCategoryComponent } from './Pages/Admin/Category/edit-category/edit-category.component';
import { SearchPipe } from './search.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    CourseComponent,
    AdminCategoryComponent,
    AddCategoryComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    EditCategoryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
