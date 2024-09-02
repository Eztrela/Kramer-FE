import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitSelectionComponent } from './kit-selection/kit-selection.component';
import { MatCardModule } from '@angular/material/card';
import { KitMainPageComponent } from './kit-main-page/kit-main-page.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    KitSelectionComponent,
    KitMainPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    LayoutModule,
  ],
  exports: [
    KitSelectionComponent
  ]
})
export class KitsModule { }
