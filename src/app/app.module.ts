import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { ConfigComponent } from './config/config.component';
import { VersionService } from './config/version.service';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserDataInService } from './sign-in/user-data-in.service';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserResolveService } from './sign-in/user-resolve.service';
import { UserCardComponent } from './admin-page/user-card/user-card.component';
import { InWorkComponent } from './in-work/in-work.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServerCardComponent } from './main/server-card/server-card.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'nav-menu', component: NavComponent },
  { path: 'in-work', component: InWorkComponent },
  { path: 'settings', component: SettingsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    SignInComponent,
    RegistrationComponent,
    ProfileComponent,
    AdminPageComponent,
    UserCardComponent,
    InWorkComponent,
    SettingsComponent,
    SidebarComponent,
    ServerCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [VersionService, UserDataInService, UserResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
