import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingSelectionComponent } from './clothing-selection/clothing-selection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ClothingSelectionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ClothingSelectionComponent
  ]
})
export class ClothingModule { }
