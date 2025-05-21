import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course!: any;
  selectedCourse: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  // ✅ Show payment pop-up when clicking "Enroll Now"
  proceedToPayment(course: any) {
    this.selectedCourse = course;
  }

  // ✅ Cancel Payment (Close the pop-up)
  cancelPayment() {
    this.selectedCourse = null;
  }

  // ✅ Submit Payment Request
  submitPayment() {
    const paymentData = {
      userId: 102,
      courseId: this.selectedCourse.id,
      amount: this.selectedCourse.price
    };

    this.http.post('http://localhost:8082/api/trainers/2/payments', paymentData)
      .subscribe(
        (response: any) => {
          console.log("Payment Response:", response);

          if (response.statusCode === 200) {
            console.log("Redirecting to /payment-success");
            this.router.navigate(['/payment-success'], {
              queryParams: {
                transactionId: response.transactionId,
                amount: response.amount,
                paymentDate: response.paymentDate,
                status: response.status,
                message: response.message,
                courseTitle: this.selectedCourse.title,
                coursePrice: this.selectedCourse.price
              }
            });
          }
        },
        (error) => {
          console.error("Payment Failed:", error);
        }
      );
  }
}
