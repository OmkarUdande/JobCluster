import { Component } from '@angular/core';

interface Job {
  title: string;
  location: string;
}

interface Course {
  title: string;
  duration: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedForm: string | null = null;

  jobs: Job[] = [
    { title: 'Frontend Developer', location: 'Remote' },
    { title: 'Backend Engineer', location: 'San Francisco' }
  ];

  courses: Course[] = [
    { title: 'Angular Basics', duration: '3 Months' },
    { title: 'Advanced JavaScript', duration: '2 Months' }
  ];

  showForm(formType: string) {
    this.selectedForm = formType;
  }
}
