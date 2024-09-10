import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OrderListingComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    OrderListingComponent
  ]
})
export class OrderModule { }
