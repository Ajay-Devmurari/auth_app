import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  http = inject(HttpClient);
  url = 'http://localhost:5000/api/';

  signup(payload: { username: string; password: string }) {
    return this.http.post(`${this.url}signup`, payload);
  }

  login(payload: { username: string; password: string }) {
    return this.http.post(`${this.url}login`, payload);
  }
}
