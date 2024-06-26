import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.scss'
})
export class SignOutComponent {
  constructor() {}

  out(): void {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
