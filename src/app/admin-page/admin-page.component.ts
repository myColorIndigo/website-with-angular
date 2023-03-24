import { Component, OnInit } from '@angular/core';
import { UserResolveService } from '../sign-in/user-resolve.service';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public statusToken: any;
  public tokenDataProfile: any;

  public user: any = {
    name: 'Bob'
  };
  public users: any = [
    {name: 'Bob'},
    {name: 'Jopa'},
    {name: 'Pica'},
  ];

  constructor(private _users: AdminUsersService, private readonly _resolveService: UserResolveService) {}

  someF() {
    console.log('work!');
    this._users.getUsers().subscribe( tokenDataProfile => this.user = tokenDataProfile);
  }

  someTg() {
    this._users.ngOnInit();
  }

  ngOnInit() {
    this._resolveService.userProfile$.subscribe((count) => this.log(count));
  }

  private log(data: any): void {
    console.log(data);
  }

}
