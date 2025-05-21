import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';

interface User {
  id: number;
  name: string;
  role: string;
  company: string;
  email: string;
  registeredDate: string;
  approved: boolean; // ✅ Added is_approved field
}

@Component({
  selector: 'app-super-admin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  pendingUsers: User[] = [];

  message: string = 'Welcome, Super Admin!';

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
   this.userService.getUsers().subscribe(
   (users) => {
      const typedUsers = users as User[];
      console.log("Filtered Users:", typedUsers);
      console.log("Users",users)
      if (Array.isArray(typedUsers)) {
         this.pendingUsers = typedUsers.filter(user =>
            (user.role === 'Employer' || user.role === 'Trainer') && user.approved !==  true
         );
      } else {
         console.error("Received non-array data:", typedUsers);
      }
   },
   error => {
      console.error("Error fetching users:", error);
   }
);

  }

  // ✅ Approve user
  approveUser(user: User) {
    this.userService.approveUser(user.id).subscribe(
      () => {
        this.pendingUsers = this.pendingUsers.filter(u => u !== user);
        alert(`${user.name} has been approved.`);
      },
      error => {
        console.error('Error approving user:', error);
      }
    );
  }

  // ✅ Reject user (remove from UI, but does not update backend)
  rejectUser(user: User) {
    this.pendingUsers = this.pendingUsers.filter(u => u !== user);
    alert(`${user.name} has been rejected.`);
  }
}
