import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly authService: AuthService) {}
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(user: User): Observable<any> {
    return this.authService.login(user);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('User registered in successfully', response);
        },
        error: (error) => {
          console.error('User registration failed', error);
        },
        complete: () => {
          console.log('User Registration request completed');
        }
      });
    }
  }
}

