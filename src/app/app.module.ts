import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { ConfigComponent } from './config/config.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserCardComponent } from './admin-page/user-card/user-card.component';
import { InWorkComponent } from './in-work/in-work.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServerCardComponent } from './main/server-card/server-card.component';
import { AddServerCardComponent } from './main/server-card/add-server-card/add-server-card.component';

import { VersionService } from './config/version.service';
import { UserDataInService } from './sign-in/user-data-in.service';
import { UserResolveService } from './sign-in/user-resolve.service';
import { ServersInfoService } from './main/servers-info.service';
import { AddServerService } from './main/server-card/add-server-card/add-server.service';
import { RegistrationService } from './registration/registration.service';

import { AdminGuard } from './admin-page/admin.guard';
import { UserGuard } from './sign-in/user.guard';

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
    AddServerCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VersionService, UserDataInService, UserResolveService, ServersInfoService, AddServerService, RegistrationService,  UserGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
