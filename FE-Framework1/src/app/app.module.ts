import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './Layouts/layout-admin/layout-admin.component';
import { LayoutBaseComponent } from './Layouts/layout-base/layout-base.component';
import { CourseListComponent } from './Components/course-list/course-list.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminCourseComponent } from './Pages/Admin/admin-course/admin-course.component';
import { AddCourseComponent } from './Pages/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/update-course/update-course.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutBaseComponent,
    CourseListComponent,
    DashboardComponent,
    AdminCourseComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
