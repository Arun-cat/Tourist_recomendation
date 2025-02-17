import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private dialog: MatDialog) {}

  onSubmit() {
    this.dialog.open(PopUpComponent);
  }

  showPopup() {
    alert('Register success');
  }
}
