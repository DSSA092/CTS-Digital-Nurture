import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  imports: [NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  isEnrolled$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.course) {
      this.isEnrolled$ = this.store
        .select(selectEnrolledCourseIds)
        .pipe(map((ids) => ids.includes(this.course.id)));
    }
  }

  get cardClasses(): Record<string, boolean> {
    return {
      'card--full': this.course ? this.course.credits >= 4 : false,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCard ngOnChanges:', {
        previous: changes['course'].previousValue,
        current: changes['course'].currentValue,
      });
      if (this.course) {
        this.isEnrolled$ = this.store
          .select(selectEnrolledCourseIds)
          .pipe(map((ids) => ids.includes(this.course.id)));
      }
    }
  }

  onEnroll(event: Event): void {
    event.stopPropagation();
    if (this.course) {
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId: this.course.id }));
      this.enrollRequested.emit(this.course.id);
    }
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
