import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ListagemComponent } from './user/listagem/listagem.component';
import { KitMainPageComponent } from './kits/kit-main-page/kit-main-page.component';
import { PlanMainPageComponent } from './plans/plan-main-page/plan-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/kits/', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'users-table', component: ListagemComponent},
  { path: 'kits/:userId?', component: KitMainPageComponent },
  { path: 'plans/:userId?', component: PlanMainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
