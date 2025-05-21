import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedForm: string = ''; // Tracks Job Seeker or Admin form
  adminRole: string = ''; // Tracks Employer or Trainer inside Admin form
  userData: any = {}; // Stores form data dynamically
  message: string = ''; // Stores success or error message
  showSuccess: boolean = false; // Tracks tick visibility

  constructor(private authService: AuthService) {}

  showForm(formType: string) {
    this.selectedForm = formType;
    this.adminRole = ''; // Reset admin role selection
    this.userData = { role: formType === 'jobSeeker' ? 'Job Seeker' : '' }; // Set role dynamically
  }

  showAdminRole(role: string) {
    this.adminRole = role || ''; // Prevent null errors
    this.userData.role = role; // Assign role dynamically in user data
    console.log("Selected Admin Role:", role, "Current adminRole state:", this.adminRole);
  }

  formSubmitted: boolean = false; // ✅ Add this line to track submission



register() {
  if (!this.validateForm()) {
    this.message = "Please fill in required fields.";
    this.showSuccess = false;
    return;
  }

  this.authService.signUp(this.userData).subscribe(
    response => {
      console.log("Registration successful:", response);
      this.message = "🎉 Registration Successful! ✅";
      this.showSuccess = true;
      this.formSubmitted = true;  // ✅ Hide form after success
    },
    error => {
      console.error("Registration failed:", error);
      this.message = "Registration failed. Please try again.";
      this.showSuccess = false;
    }
  );
}


  private validateForm(): boolean {
    return this.userData.role && this.userData.email && this.userData.password;
  }
}
