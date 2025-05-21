import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 showLogin = false;
 showSignUp = false;
 showCourse = false;
 

  toggleLogin() {
  this.showLogin = !this.showLogin;
  console.log("Login visibility:", this.showLogin);
}
  toggleSignUp() {
  this.showSignUp = !this.showSignUp;
  console.log("Login visibility:", this.showSignUp);
}
  toggleCourse() {
  this.showCourse = !this.showCourse;
  console.log("Login visibility:", this.showCourse);
}

}
