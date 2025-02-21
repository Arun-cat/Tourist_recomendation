import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ForgotPasswordComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  @ViewChild('forgotPassword') forgotPasswordComponent!: ForgotPasswordComponent;

  openForgotPasswordModal() {
    this.forgotPasswordComponent.openModal();
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
