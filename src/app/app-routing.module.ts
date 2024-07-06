import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { ComponentListComponent } from './pages/user/component-list/component-list.component';
import { LoginOptionsComponent } from './pages/auth/login-options/login-options.component';
import { LoginPasswordComponent } from './pages/auth/login-password/login-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'component-list',
    component: ComponentListComponent
  },
  {
    path:'login',
    component:LoginOptionsComponent
  },
  {
    path:'login-password',
    component: LoginPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
