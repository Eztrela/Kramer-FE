import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';
import {UserFirestoreService} from "../../shared/services/user-firestore.service";


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserFirestoreService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const userId = (this.activatedRoute.snapshot.params['userId']);
    this.userService.getById(userId).subscribe(
      response => {
        this.user = response;
      }
    )
  }

  goToMainPage(): void {
    this.router.navigate(['/kits', this.user?.id]);
  }
}
