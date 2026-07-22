import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${API}/courses`).pipe(
      map((courses) => courses.filter((c) => c.credits > 0)),
      /**
       * tap is used for side effects (logging) that should not alter the stream.
       * Doing logging inside map would mix concerns — map is for data transformation,
       * tap is for observable side effects like logging, analytics, or triggering external actions.
       */
      tap((courses) => console.log('Courses loaded:', courses)),
      retry(2),
      catchError((err) => {
        console.error('Failed to load courses:', err);
        return throwError(() => new Error('Could not load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API}/courses/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(`${API}/courses`, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${API}/courses/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/courses/${id}`);
  }
}
