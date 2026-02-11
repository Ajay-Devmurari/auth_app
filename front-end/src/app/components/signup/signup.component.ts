import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from '../../api-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username = '';
  password = '';
  isLoading = false;
  apiService = inject(ApiServices);
  router = inject(Router);

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

    this.apiService.signup(payload).subscribe({
      next: () => {
        alert('signup sucessfully');
        this.username = '';
        this.password = '';
        this.router.navigate(['/home']);

        this.isLoading = false;
      },
      error: (error) => {
        alert('signup failed');
        console.log(error);
        this.isLoading = false;
      },
    });
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
