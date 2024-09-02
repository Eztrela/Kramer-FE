import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlogged-header',
  templateUrl: './unlogged-header.component.html',
  styleUrls: ['./unlogged-header.component.scss']
})
export class UnloggedHeaderComponent {
  constructor(private router: Router) {}

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }
}
