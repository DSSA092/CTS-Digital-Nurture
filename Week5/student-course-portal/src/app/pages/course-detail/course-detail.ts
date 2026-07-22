import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  imports: [NgIf],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    /**
     * switchMap: when a new route param arrives, it cancels any in-flight HTTP request
     * for the previous param and starts a new one. This prevents stale responses from
     * earlier param values overwriting the latest data (race condition avoidance).
     */
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          return this.courseService.getCourseById(id);
        })
      )
      .subscribe({
        next: (course) => (this.course = course),
        error: () => (this.course = undefined),
      });
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
