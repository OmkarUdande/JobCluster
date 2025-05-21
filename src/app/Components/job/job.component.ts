import { Component, OnInit } from '@angular/core';
import { JobService, Job } from './../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobs: Job[] = [];
  selectedJob: Job | null = null;
  selectedFile: File | null = null;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.fetchJobs();
  }

  fetchJobs() {
    this.jobService.getJobs().subscribe(
      (data: Job[]) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  openApplicationForm(job: Job) {
    this.selectedJob = job;
  }

  closeApplicationForm() {
    this.selectedJob = null;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitApplication() {
    if (this.selectedFile) {
      console.log(`Resume uploaded for ${this.selectedJob?.title}:`, this.selectedFile.name);
      alert(`Applied Successfully for ${this.selectedJob?.title}!`);
      this.closeApplicationForm();
    } else {
      alert("Please upload your resume before submitting.");
    }
  }
}
