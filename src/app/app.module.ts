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
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SomeUserComponent } from './profile/some-user/some-user.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'some-user', component: SomeUserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    MenuComponent,
    SignInComponent,
    RegistrationComponent,
    ProfileComponent,
    SomeUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [VersionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
