import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:8082/api/trainers/3/courses'; // ✅ Backend API URL

  constructor(private http: HttpClient) {}

  // ✅ Upload a new course with all required fields
 uploadCourse(course: {
  title: string;
  description: string;
  paid: boolean;
  price?: number;
  videoUrl?: string;
  pdfUrl?: string;
  liveWorkshop: boolean;
  courseDuration: string;
  organization: string;
}): Observable<any> {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

  return this.http.post(`${this.apiUrl}`, course, { headers }); // ✅ Remove extra "/upload"
}
getCourses(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8082/api/trainers/3/courses');
}


}





