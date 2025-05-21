import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

interface Course {
  title: string;
  description: string;
  paid: boolean;
  price?: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedCourse: Course | null = null;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (data) => {
        console.log('Fetched Courses:', data);
        this.courses = data;
        this.filteredCourses = [...this.courses]; // Initially display all courses
      },
      (error) => {
        console.error('❌ Error fetching courses:', error);
      }
    );
  }

  viewCourseDetails(course: Course) {
    this.selectedCourse = course;
  }

  proceedToPayment() {
    if (this.selectedCourse?.paid) {
      alert(`Redirecting to payment for ${this.selectedCourse.title}`);
    } else {
      alert('This course is free! You can enroll directly.');
    }
  }
}
