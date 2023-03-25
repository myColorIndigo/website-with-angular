import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResolveService } from '../sign-in/user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  public statusToken: any;
  public tokenDataProfile: any;

  constructor(private _http: HttpClient, private readonly resolveService: UserResolveService) { }

  getUsers(){
    this.resolveService.userProfile$.subscribe(
      value => {
        if (value.data.user !== undefined) {
          if (value.data.user.role === 'admin') {
            this.tokenDataProfile = value;
            this.resolveService.token$.subscribe(token => this.statusToken = token);
          }
        }
      }
    );

    const tokenUser = 'Bearer ' + this.statusToken?.token;

    return this._http.get<any>('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/admin/users', { headers: new HttpHeaders({ 'Authorization': tokenUser })});

  }
}
