import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SuperadminComponent } from './Components/superadmin/superadmin.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CourseComponent } from './Components/course/course.component';
import { JobComponent } from './Components/job/job.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { HomeComponent } from './Components/home/home.component';
import { JobUploadComponent } from './Components/job-upload/job-upload.component';
import { CourseUploadComponent } from './Components/course-upload/course-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentsuccessComponent } from './Components/paymentsuccess/paymentsuccess.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SuperadminComponent,
    AdminComponent,
    CourseComponent,
    JobComponent,
    CourseDetailsComponent,
    HomeComponent,
    JobUploadComponent,
    CourseUploadComponent,
    PaymentsuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,


    RouterModule.forRoot([
      { path: 'payment-success', component: PaymentsuccessComponent }
    ])]
  ,
  providers: [
    provideClientHydration(),


  ],
  bootstrap: [AppComponent],
  exports: [CourseDetailsComponent]
})
export class AppModule { }
