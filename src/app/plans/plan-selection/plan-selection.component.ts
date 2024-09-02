import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Plan} from 'src/app/shared/model/plan';
import {PlanService} from 'src/app/shared/services/plan.service';
import {UserService} from 'src/app/shared/services/user.service';
import {User} from 'src/app/shared/model/user';
import {KitService} from 'src/app/shared/services/kit.service';
import {PlanFirestoreService} from "../../shared/services/plan-firestore.service";
import {UserFirestoreService} from "../../shared/services/user-firestore.service";
import {KitFirestoreService} from "../../shared/services/kit-firestore.service";
import { Kit } from 'src/app/shared/model/kit';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent {
  plans: Plan[] = [];
  selectedPlan: Plan | null = null;
  user: User | null = null;
  kitFactor: number = 1;
  hasUpdated: boolean = false;

  constructor(private planService: PlanFirestoreService, private userService: UserFirestoreService, private kitService: KitFirestoreService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.planService.getAll().subscribe(
      response => {
        this.plans = response;
        this.plans = this.plans.sort((a, b) => a.duration - b.duration);
      }
    )
    const orderId = this.activatedRoute.snapshot.params['orderId'];

    const userId = (this.activatedRoute.snapshot.params['userId?']);
    this.userService.getById(userId).subscribe(
      response => {
        this.user = response;
      }
    )
  }

  toggleSelected(plan: Plan): void {
    if (this.isSelected(plan)) {
      this.selectedPlan = null;
    } else {
      this.selectedPlan = plan;
    }
  }

  isSelected(plan: Plan): boolean {
    return this.selectedPlan === plan;
  }

  canContinue(): boolean {
    return this.selectedPlan !== null;
  }

  updatePrices(): void {
    if (!this.hasUpdated) {
      this.plans.map((plan) => plan.basePrice = plan.basePrice * this.kitFactor);
    }
  }

  goToKits(): void {
    this.router.navigate(['/kits', this.user?.id]);
  }

  goToClothes(): void {
    this.router.navigate(['/clothes', this.user?.id])
  }

}
