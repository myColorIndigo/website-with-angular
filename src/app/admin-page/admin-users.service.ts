import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResolveService } from '../sign-in/user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  public statusToken: any; // Замена на private
  public tokenDataProfile: any;

  constructor(private _http: HttpClient, private readonly resolveService: UserResolveService) { }

  getUsers() {
    this.isAdmin();
    let tokenUser = 'Bearer ' + this.statusToken?.data.token;
    
    if (sessionStorage.getItem('userRole') === '1') {
      //console.log(sessionStorage.getItem('adminToken'));
      tokenUser = 'Bearer ' + sessionStorage.getItem('adminToken');
    }

    return this._http.get<any>('https://hasu.monster/api/users', { headers: new HttpHeaders({ 'Authorization': tokenUser })});

  }

  isAdmin() {
    this.resolveService.userProfile$.subscribe(
      value => {
        if (value !== undefined) {
          if (value.is_admin === 1) {
            this.tokenDataProfile = value;
            this.resolveService.token$.subscribe(token => this.statusToken = token);
          }
        }
      }
    );
  }
}
