import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitsModule } from './kits/kits.module';
import { PlansModule } from './plans/plans.module';
import { ClothingModule } from './clothing/clothing.module';
import { LayoutModule } from './layout/layout.module';
import { OrderModule } from './order/order.module';
import { FirestoreModule } from './firestore/firestore.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    KitsModule,
    PlansModule,
    ClothingModule,
    LayoutModule,
    OrderModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
