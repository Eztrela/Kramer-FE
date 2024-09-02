import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PlanMainPageComponent } from './plan-main-page/plan-main-page.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    PlanSelectionComponent,
    PlanMainPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [
    PlanSelectionComponent
  ]
})
export class PlansModule { }
