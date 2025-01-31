import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44328/api/Users';

  private isAuthenticated = false;
  private userId: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    //return this.http.post<any>(`${this.apiUrl}/login`, user);
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      tap((response) => {
        this.isAuthenticated = true;
        this.userId = response.userId; // Assuming the response contains userId
        localStorage.setItem('userId', this.userId!);
      }),
      catchError(error => {
        this.isAuthenticated = false;
        return of(error);
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.userId = null;
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {

    // Implement your logic to check if the user is logged in
    return this.isAuthenticated;
    //return true; // or false based on your logic
  }
  getUserId(): string|null {
    return this.userId || localStorage.getItem('userId');
  }
}
