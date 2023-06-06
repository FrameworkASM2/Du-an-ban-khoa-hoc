import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { AdminCourseComponent } from './Pages/Admin/admin-course/admin-course.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layouts/base-layout/base-layout.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './Components/course/course.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminCourseComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    CourseComponent
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
