import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-section',
  templateUrl: './initial-section.component.html',
  styleUrls: ['./initial-section.component.scss']
})
export class InitialSectionComponent {
  constructor(private router: Router) {

  }

  goToSignUp() {
    this.router.navigate(['/sign-up'])
  }
}
