import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiServices } from '../../api-services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login.component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  gotoSignup() {
    this.router.navigate(['/signup']);
  }

  username = '';
  password = '';
  isLoading = false;
  apiService = inject(ApiServices);

  async onSubmit() {
    if (!this.username || !this.password) {
      alert('all filed are required..');
      return;
    }
    this.isLoading = true;
    const payload = {
      username: this.username,
      password: this.password,
    };

    this.apiService.login(payload).subscribe({
      next: () => {
        alert('Login successfully');
        this.username = '';
        this.password = '';
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Failed to login');
        console.log(error);
        this.isLoading = false;
      },
    });
  }
}
