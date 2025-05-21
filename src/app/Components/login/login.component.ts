import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   credentials = { email: '', password: '' };
   message: string = '';
   selectedRole: string = 'jobseeker'; // Default role

   constructor(private authService: AuthService, private router: Router) {}

   // Function to handle role selection
   selectRole(role: string): void {
     this.selectedRole = role;
     console.log(`Role selected: ${role}`);
   }




 login() {
  this.authService.login(this.credentials).subscribe(response => {
    console.log("Login successful:", response);

    if (response.token) {
      localStorage.setItem('authToken', response.token);  // ✅ Store token locally
      console.log("Stored Token:", response.token);
      this.message = "🎉 Logged In Successful! ✅";
    }

    // ✅ Ensure role exists before redirecting
    if (response.role) {
      console.log("User role:", response.role);

      if (response.role === 'SUPER_ADMIN') {
        console.log("Redirecting to Super Admin...");
        this.router.navigate(['/superadmin']); // Redirect to Super Admin
      } else if (response.role === 'Employer' || response.role === 'Trainer') {
        console.log("Redirecting to Admin...");
        this.router.navigate(['/admin']); // ✅ Redirect Employer & Trainer to Admin
      } else {
        console.log("Redirecting to default dashboard...");
        this.router.navigate(['/dashboard']); // ✅ Default route for other roles
      }
    } else {
      console.error("User role is undefined!");
    }
  },
  error => {
    console.error("Login failed:", error);
    this.message = error.error.message || "❌ Invalid credentials. Please try again.";
  });
}



}
