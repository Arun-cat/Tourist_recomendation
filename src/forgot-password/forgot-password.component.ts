import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup;
  message: string = '';

  @ViewChild('forgotPasswordModal', { static: false }) modalElement!: ElementRef;
  private modalInstance!: Modal;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email')!;
  }

  openModal() {
    this.modalInstance = new Modal(this.modalElement.nativeElement);
    this.modalInstance.show();
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;

      setTimeout(() => {
        this.message = `A reset link has been sent to ${email}`;
        this.forgotPasswordForm.reset();
        setTimeout(() => this.modalInstance.hide(), 2000);
      }, 1000);
    }
  }
}
