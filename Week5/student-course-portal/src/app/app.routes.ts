import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CoursesLayout } from './components/courses-layout/courses-layout';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },

  // Nested routes under /courses using CoursesLayout as shell
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail },
    ],
  },

  // Profile route protected by auth guard
  { path: 'profile', component: StudentProfile, canActivate: [authGuard] },

  // Lazy-loaded enrollment feature — separate JS chunk loaded on first visit
  {
    path: 'enroll',
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes),
    canActivate: [authGuard],
  },

  // Wildcard 404 route — must be last
  { path: '**', component: NotFound },
];
