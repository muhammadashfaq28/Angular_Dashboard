import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, ReactiveFormsModule, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private auth: Auth, private router: Router) { }

  logout() {
    this.auth.logout()
    this.router.navigate([''])  
    // localStorage.removeItem('patients');

  }



}


