import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NavComponent } from './header/nav/nav.component';
import { InWorkComponent } from './in-work/in-work.component';
import { ServerCardComponent } from './main/server-card/server-card.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminGuard } from './admin-page/admin.guard';
import { UserGuard } from './sign-in/user.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: 'profile',
    canActivate: [UserGuard],
    component: ProfileComponent },

  { path: 'admin-page',
    canActivate: [AdminGuard],
    component: AdminPageComponent },

  { path: 'nav-menu',
    canActivate: [UserGuard],
    component: NavComponent },
    
  { path: 'settings',
    canActivate: [UserGuard],
    component: SettingsComponent },
    
  { path: 'in-work', component: InWorkComponent },
  { path: 'server/:serverID', component: ServerCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
