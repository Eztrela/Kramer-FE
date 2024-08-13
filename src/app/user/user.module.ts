import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ListagemComponent } from './listagem/listagem.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    ListagemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    ListagemComponent,
  ],
})
export class UserModule {}
