import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Observable to check the authentication status
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  // Method to set the authentication status
  setAuthenticationStatus(isAuthenticated: boolean): void {
    this.isAuthenticated$.next(isAuthenticated);
  }
}
