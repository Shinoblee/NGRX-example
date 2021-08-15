import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { maskUserName } from './state/user.reducer';

const userRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('user', maskUserName),
  ],
  declarations: [LoginComponent],
})
export class UserModule {}