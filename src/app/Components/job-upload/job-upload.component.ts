import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from './../../services/job.service';

@Component({
  selector: 'app-job-upload',
  templateUrl: './job-upload.component.html',
  styleUrls: ['./job-upload.component.css']
})
export class JobUploadComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      title: [''],
      description: [''],
      location: [''],
      salary: [null],
      category: [''],
      imagePath: [''], // ✅ Added missing field
      isApproved: [false], // ✅ Added missing field
      isActive: [true],
      jobType: ['FULL_TIME'] // ✅ Ensure it matches backend ENUM
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      this.jobForm.patchValue({ imagePath: file.name }); // ✅ Storing image path
    }
  }

  onSubmit() {
    if (this.jobForm.valid) {
        const jobData = {
            title: this.jobForm.value.title,
            description: this.jobForm.value.description,
            location: this.jobForm.value.location,
            salary: parseFloat(this.jobForm.value.salary), // ✅ Ensure correct number format
            category: this.jobForm.value.category,
            imagePath: this.jobForm.value.imagePath || "uploads/default.jpg", // ✅ Default value if missing
            isApproved: this.jobForm.value.isApproved,
            isActive: this.jobForm.value.isActive,
            jobType: this.jobForm.value.jobType.toUpperCase() // ✅ Ensure correct ENUM format
        };

        console.log('Sending formatted job data:', jobData); // ✅ Debugging log

        this.jobService.postJob(jobData).subscribe(
            (response) => {
                console.log('Job posted successfully!', response);
                alert('Job Posted Successfully!');
            },
            (error) => {
                console.error('Error posting job:', error);
                alert(`Failed to post job. Status: ${error.status}, Message: ${error.message}`);
            }
        );
    }
  }
}
