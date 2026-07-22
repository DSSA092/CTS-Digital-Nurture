import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

/** Custom sync validator: rejects courseId values that start with "XX" */
export const noCourseCode: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const val = String(control.value ?? '');
  return val.toUpperCase().startsWith('XX') ? { noCourseCode: true } : null;
};

/** Custom async validator: rejects emails containing "test@" (simulates server check) */
export const simulateEmailCheck: AsyncValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  return of(control.value).pipe(
    delay(800),
    map((email: string) => (email && email.includes('test@') ? { emailTaken: true } : null))
  );
};

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  /**
   * Typed getter for the FormArray.
   * Using a getter with explicit return type (FormArray) avoids casting in the template
   * and gives us strong type-checking — if the control name ever changes, TypeScript
   * will catch it here rather than silently at runtime.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    /**
     * form.value excludes disabled controls; getRawValue() includes them.
     * If any control were disabled (e.g. a read-only field), getRawValue() would
     * capture its value while form.value would not.
     */
    console.log('form.value:', this.enrollForm.value);
    console.log('getRawValue():', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }

  onReset(): void {
    this.enrollForm.reset();
    this.additionalCourses.clear();
    this.submitted = false;
  }
}
