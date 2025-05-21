import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';




@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrls: ['./course-upload.component.css']
})
export class CourseUploadComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      paid: [false], // ✅ Default to free course
      price: [null], // ✅ Only required if "Paid" is checked
      videoUrl: [''],
      pdfUrl: [''],
      liveWorkshop: [false], // ✅ Default to false
      courseDuration: ['', Validators.required],
      organization: ['', Validators.required]
    });
  }

// ngOnInit() {
//   this.courseForm = this.fb.group({
//     title: ['', Validators.required],
//     paid: [false], // ✅ Set default safely
//     price: [null],
//     liveWorkshop: [false],
//   });
// }

onSubmit() {
  const token = localStorage.getItem('authToken');

  if (!token) {
    alert('❌ You must be logged in to upload courses.');
    return;
  }

  console.log("Submitting Course Data:", this.courseForm.value); // ✅ Log data before sending

  this.courseService.uploadCourse(this.courseForm.value).subscribe(
    response => {
      console.log("✅ Backend Response:", response);
      alert('✅ Course uploaded successfully!');
      this.courseForm.reset();
    },
    error => {
      console.error('❌ Error uploading course:', error);
    }
  );
}

}
