import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {UserFirestoreService} from "../../shared/services/user-firestore.service";


@Component({
  selector: 'app-kit-main-page',
  templateUrl: './kit-main-page.component.html',
  styleUrls: ['./kit-main-page.component.scss']
})
export class KitMainPageComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private userService: UserFirestoreService) {}

  ngOnInit(): void {
    this.isLogged = this.userService.isLoggedIn();
  }
}
