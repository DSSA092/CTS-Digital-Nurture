import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Hardcoded for demonstration purposes — would use JWT in production
  isLoggedIn: boolean = true;
}
