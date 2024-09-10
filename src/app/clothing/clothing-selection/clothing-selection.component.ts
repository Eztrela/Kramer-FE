import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/shared/model/clothing';
import { Plan } from 'src/app/shared/model/plan';
import { Kit } from 'src/app/shared/model/kit';
import { ClothingService } from 'src/app/shared/services/clothing.service';
import { PlanService } from 'src/app/shared/services/plan.service';
import { KitService } from 'src/app/shared/services/kit.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { User } from 'src/app/shared/model/user';
import { Order } from 'src/app/shared/model/order';
import {ClothingFirestoreService} from "../../shared/services/clothing-firestore.service";
import {OrderFirestoreService} from "../../shared/services/order-firestore.service";
import {PlanFirestoreService} from "../../shared/services/plan-firestore.service";
import {KitFirestoreService} from "../../shared/services/kit-firestore.service";
import {UserFirestoreService} from "../../shared/services/user-firestore.service";
@Component({
  selector: 'app-clothing-selection',
  templateUrl: './clothing-selection.component.html',
  styleUrls: ['./clothing-selection.component.scss']
})
export class ClothingSelectionComponent implements OnInit{
  clothes: Clothing[] = [];
  selectedClothes: Clothing[] = [];
  clothesRemaining: number | undefined;
  order: Order = new Order('', '', '', '', 0, '', '', [], '');
  kit: Kit | null = null;
  plan: Plan | null = null;
  user: User | null = null;

  constructor(private clothingService: ClothingFirestoreService, private orderService: OrderFirestoreService, private planService: PlanFirestoreService, private kitService: KitFirestoreService, private userService: UserFirestoreService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    const orderId = this.activatedRoute.snapshot.params['orderId'];
      this.orderService.getById( orderId).subscribe(
        response => {
          this.order = response;
          this.kitService.getById(this.order.kitId).subscribe(
            response => {
              this.kit = response;
            }
          );
          this.planService.getById(this.order.planId).subscribe(
            response => {
              this.plan = response;
            }
          );

          if (this.order.kitId === '6MPRiCRtU6pQD0psEJbV') {
            this.clothingService.getAll().subscribe(
              response => {   
                this.clothes = response;
                this.calcClothesRemaining();
              });
          } else {
            this.clothingService.getByKitId(this.order.kitId).subscribe(
              response => {
                this.clothes = response;
                this.calcClothesRemaining();
              });
          }
        }
      );

    const userId = (this.activatedRoute.snapshot.params['userId']);
    this.userService.getById(userId).subscribe(
      response => {
        this.user = response;
      }
    );
  }

  toggleSelected(clothing: Clothing): void {
    if (this.isSelected(clothing)) {
      this.selectedClothes = this.selectedClothes.filter((c) => c !== clothing);
    } else if (this.clothesRemaining === 0) {
      alert("There are no remaining clothes to choose.");
    } else {
      this.selectedClothes.push(clothing);
    }
    this.calcClothesRemaining();
  }

  isSelected(clothing: Clothing): boolean {
    return this.selectedClothes.includes(clothing);
  }

  isUnavailable(clothing: Clothing): boolean {
    return !this.selectedClothes.includes(clothing) && this.canContinue();
  }

  calcClothesRemaining(): void {
    if (this.plan !== null) {
      this.clothesRemaining = this.plan?.numOfClothes - this.selectedClothes.length;
    }
  }

  canContinue(): boolean {
    return this.clothesRemaining === 0;
  }

  updateOrder(): void {
    const clothesIds = this.selectedClothes.map(clothing => clothing.id);
    this.order.clothesIds = clothesIds;
    this.orderService.update(this.order).subscribe();
  }

  goToPlans(): void {
    this.router.navigate(['plans', this.order.id, this.user?.id]);
  }

  goToFinalPage(): void {
    this.updateOrder();
    this.router.navigate(['thank-you', this.user?.id]);
  }

}
