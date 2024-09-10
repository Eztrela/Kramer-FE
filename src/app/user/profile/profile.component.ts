import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';
import {UserFirestoreService} from "../../shared/services/user-firestore.service";
import {OrderFirestoreService} from "../../shared/services/order-firestore.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hide = true;
  userId: string = ``;
  user: User = new User(``,``,``,``)
  hasInfoChanged: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserFirestoreService, private orderService: OrderFirestoreService) {

  }

  ngOnInit(): void {
      this.userId = this.activatedRoute.snapshot.params['userId'];

      this.userService.getAll().subscribe(users => {
        for(let userFound of users) {
          if(userFound.id == this.userId) {
            this.user = userFound;
          }
        }
      });
  }

  onInputChange() {
    this.hasInfoChanged = true;
  }

  saveChanges() {
    this.userService.update(this.user).subscribe();
    this.hasInfoChanged = false;
  }

  deleteAccount() {
    this.router.navigate(['']);
    this.userService.delete(this.user).subscribe();
    this.userService.changeLoggedIn(false);
  }

  goBack() {
    this.router.navigate(['/kits', this.userId]);
  }

  goToOrders() {
    this.router.navigate(['/orders', this.user.id]);
  }

  logOut() {
    this.router.navigate(['/sign-in']);
  }
}
