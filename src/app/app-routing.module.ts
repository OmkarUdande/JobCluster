import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CourseComponent } from './Components/course/course.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { HomeComponent } from './Components/home/home.component';
import { JobComponent } from './Components/job/job.component';
import { SuperadminComponent } from './Components/superadmin/superadmin.component';
import { AdminComponent } from './Components/admin/admin.component';
import { PaymentsuccessComponent } from './Components/paymentsuccess/paymentsuccess.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default Route
  { path: 'login', component: LoginComponent }, // Login Route
  { path: 'signup', component: SignupComponent }, // Signup Route
  { path: 'course', component: CourseComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'job', component: JobComponent },
  { path: 'superadmin', component: SuperadminComponent }, // ✅ Route for Superadmin
  { path: 'admin', component: AdminComponent },
   { path: 'course-details', component: CourseDetailsComponent },
  { path: 'payment-success', component: PaymentsuccessComponent },
  { path: 'courses', component: CourseComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


