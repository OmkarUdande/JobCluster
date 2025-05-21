import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'; // ✅ Import useful operators

interface ApiResponse {
  status: number;
  message: string;
  data: User[];
}

interface User {
  id: number;
  name: string;
  role: string;
  company: string;
  email: string;
  registeredDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8081/api/users'; // ✅ Define reusable base URL

  constructor(private http: HttpClient) {}

  // ✅ Get all users (Employer & Trainer)
 getUsers(): Observable<User[]> {
  const token = localStorage.getItem('authToken');

  if (!token) {
    console.error("No auth token found.");
    return throwError(() => new Error("Unauthorized: No token available"));
  }

  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

  return this.http.get<ApiResponse>('http://localhost:8081/api/users/getall', { headers }).pipe(
    tap(response => console.log("API Full Response:", response)), // ✅ Debug API response
    map(response => response.data || []), // ✅ Extract and return `data` safely
    catchError(error => {
      console.error("Error fetching users:", error);
      return throwError(() => new Error("Failed to fetch users"));
    })
  );
}

approveUser(userId: number): Observable<any> {
  const token = localStorage.getItem('authToken'); // ✅ Retrieve stored token

  if (!token) {
    console.error("No auth token found.");
    return throwError(() => new Error("Unauthorized: No token available"));
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this.http.patch(`http://localhost:8081/api/users/approve/${userId}`, {}, { headers }).pipe(
    tap(() => console.log(`User ${userId} approved successfully!`)),
    catchError(error => {
      console.error(`Error approving user ${userId}:`, error);
      return throwError(() => new Error("Failed to approve user due to API or CORS issue"));
    })
  );
}

}
