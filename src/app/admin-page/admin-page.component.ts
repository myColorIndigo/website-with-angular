import { Component } from '@angular/core';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  public users: any = [];

  constructor(private _users: AdminUsersService) {}

  showUsers() {
    this._users.getUsers().subscribe(userData => this.users = userData.data.users); 
  }

}
