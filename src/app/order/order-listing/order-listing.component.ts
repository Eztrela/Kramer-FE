import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from 'src/app/shared/model/kit';
import { Order } from 'src/app/shared/model/order';
import { Plan } from 'src/app/shared/model/plan';
import { KitService } from 'src/app/shared/services/kit.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { PlanService } from 'src/app/shared/services/plan.service';
import {OrderFirestoreService} from "../../shared/services/order-firestore.service";
import {PlanFirestoreService} from "../../shared/services/plan-firestore.service";
import {KitFirestoreService} from "../../shared/services/kit-firestore.service";

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.scss']
})
export class OrderListingComponent implements OnInit{
  orders: Order[] = [];
  columns: string[] = ['id', 'date', 'devolutionDate', 'status', 'price', 'kit', 'plan', 'actions'];
  userId: string = '';
  kitsLabels: Object = {};
  plansLabels: Object = {};


  constructor(private orderService: OrderFirestoreService, private planService: PlanFirestoreService, private kitService: KitFirestoreService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userId = (this.activatedRoute.snapshot.params['userId']);
    this.orderService.getByUserId(this.userId).subscribe(
      response => {
        this.orders = response;
      }
    );
    this.kitService.getAll().subscribe(
      response => {
      this.kitsLabels = this.mapKitsToLabels(response);
      }
    );
    this.planService.getAll().subscribe(
      response => {
      this.plansLabels = this.mapPlansToLabels(response);
      }
    );
  }

  mapKitsToLabels(kits: Kit[]): { [key: number]: string } {
    const labels: { [key: number]: string } = {};

    kits.forEach((kit) => {
      labels[kit.id] = kit.name;
    });

    return labels;
  }

  mapPlansToLabels(plans: Plan[]): { [key: number]: string } {
    const labels: { [key: number]: string } = {};

    plans.forEach((plan) => {
      labels[plan.id] = plan.duration;
    });

    return labels;
  }

  isReturned(order: Order): boolean {
    return order.status === 'Returned';
  }

  returnOrder(order: Order): void {
    const index = this.orders.findIndex(obj => obj.id === order.id);
    this.orders[index].status = 'Returned';
    this.orderService.update(this.orders[index]).subscribe();
  }

  deleteOrder(order: Order): void {
    const index = this.orders.findIndex(obj => obj.id === order.id);
    this.orderService.delete(this.orders[index]).subscribe(
      () => {
        this.orderService.getByUserId(this.userId).subscribe(
          response => {
            this.orders = response;
          }
        );
      }
    );

  }

  goBack() {
    this.router.navigate(['/profile', this.userId]);
  }

}
