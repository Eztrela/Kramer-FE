import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {UserFirestoreService} from "../../shared/services/user-firestore.service";

@Component({
  selector: 'app-plan-main-page',
  templateUrl: './plan-main-page.component.html',
  styleUrls: ['./plan-main-page.component.scss']
})
export class PlanMainPageComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private userService: UserFirestoreService) {}

  ngOnInit(): void {
    this.isLogged = this.userService.isLoggedIn();
  }
}
