import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private auth: Auth, private router: Router) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    const success = this.auth.login(email!, password!);

    if (success) {
      this.router.navigate(['/dashboard'], {
        state: { loginSuccess: true }
      });
    } else {
      alert('Invalid credential');
    }
  }
}