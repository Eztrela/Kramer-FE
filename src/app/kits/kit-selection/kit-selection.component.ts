import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Kit} from 'src/app/shared/model/kit';
import {User} from 'src/app/shared/model/user';
import {KitService} from 'src/app/shared/services/kit.service';
import {UserService} from 'src/app/shared/services/user.service';
import {KitFirestoreService} from "../../shared/services/kit-firestore.service";
import {UserFirestoreService} from "../../shared/services/user-firestore.service";

@Component({
  selector: 'app-kit-selection',
  templateUrl: './kit-selection.component.html',
  styleUrls: ['./kit-selection.component.scss']
})
export class KitSelectionComponent implements OnInit {
  kits: Kit[] = [];
  selectedKit: Kit | null = null;
  user: User | null = null;

  isUserLoggedIn = false;

  constructor(private kitService: KitFirestoreService, private userService: UserFirestoreService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.userService.isLoggedIn();
    this.kitService.getAll().subscribe(
      response => {
        this.kits = response;
        this.kits = this.kits.sort((a, b) => a.factor - b.factor);
      }
    )
    const userId = (this.activatedRoute.snapshot.params['userId?']);
    this.userService.getById(userId).subscribe(
      response => {
        this.user = response;
      }
    )
  }

  toggleSelected(kit: Kit): void {
    if (this.isSelected(kit)) {
      this.selectedKit = null;
    } else {
      this.selectedKit = kit;
      const currentDate = new Date()
      const userId = this.user ? this.user?.id : '';
    }
  }

  isSelected(kit: Kit): boolean {
    return this.selectedKit === kit;
  }

  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }
}
