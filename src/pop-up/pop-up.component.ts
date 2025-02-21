import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  constructor(
    private dialogRef: MatDialogRef<PopUpComponent>, 
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close(); // Close popup
      this.router.navigate(['/login']); // Redirect to login page
    }, 3000); // 3 seconds delay
  }
}
