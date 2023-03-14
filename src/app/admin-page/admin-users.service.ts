import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserResolveService } from '../sign-in/user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService implements OnInit{

  public statusToken: any;
  public tokenDataProfile: any;

  private users = [
    { name: 'Bob'},
    { name: 'Jonh'}
  ]

  constructor(private _http: HttpClient, private readonly resolveService: UserResolveService) { }

  ngOnInit() { // Залупа не хочет ловить данные
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
    console.log(this.statusToken);
  }

  getUsers(){
    /*
    let promiseAdminToken = new Promise((resolve) => {
      this.resolveService.userProfile$.subscribe(
        value => {
          console.log(value);
          
    console.log('work!');
          if (value.data.user !== undefined) {
            if (value.data.user.role === 'admin') {
              
    console.log('work!');
              this.resolveService.token$.subscribe(token => resolve(this.statusToken = token));
            }
          }
        }
      );
    });
    
    console.log('work!');
    console.log(await promiseAdminToken);
*/
    const tokenUser = 'Bearer ' + this.statusToken?.token;

    return this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/admin/users', { headers: new HttpHeaders({ 'Authorization': tokenUser })});

  }
}
