import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  title: string;
  location: string;
  salary: number;
  category: string;
  isActive: boolean;
  imagePath: string;
  isApproved: boolean;
  jobType: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:8086/api/jobs'; // ✅ Correct backend URL

  constructor(private http: HttpClient) {}

  postJob(jobData: any): Observable<any> {
    return this.http.post(this.apiUrl, jobData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
    getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
}

