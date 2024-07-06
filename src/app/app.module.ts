import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/user/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ComponentListComponent } from './pages/user/component-list/component-list.component';
import { ComponentPageComponent } from './pages/user/component-page/component-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LoginOptionsComponent } from './pages/auth/login-options/login-options.component';
import { LoginOtpComponent } from './pages/auth/login-otp/login-otp.component';
import { LoginPasswordComponent } from './pages/auth/login-password/login-password.component';
import { RegisterComponent } from './pages/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ComponentListComponent,
    ComponentPageComponent,
    SidebarComponent,
    LoginOptionsComponent,
    LoginOtpComponent,
    LoginPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
