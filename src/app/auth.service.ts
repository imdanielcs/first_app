import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInKey = 'loggedIn';

  constructor() {}

  isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem(this.loggedInKey);
    return loggedIn === 'true';
  }

  login(): void {
    localStorage.setItem(this.loggedInKey, 'true');
  }

  logout(): void {
    localStorage.removeItem(this.loggedInKey);
  }
}
