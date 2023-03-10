import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { UserResolveService } from './user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
    
  public statusToken: any;
  public tokenDataProfile: any;

  constructor(private _http: HttpClient, private readonly userResolveService: UserResolveService){ }

  async postData(user: User){
    
    const body = {email: user.email, password: user.password};

    let promiseToken = new Promise((resolve) => {
      this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body).subscribe( statusToken => resolve(this.statusToken = statusToken));
    });

    console.log(await promiseToken);

    const tokenUser = 'Bearer ' + this.statusToken?.token;

    let promiseProfile = new Promise((resolve) => {
      this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenUser })}).subscribe( tokenDataProfile => resolve(this.tokenDataProfile = tokenDataProfile));
    });

    console.log(await promiseProfile);

    return this.userResolveService.changeCount(await promiseProfile);
     // передать данные в юзер резолв сервис
  };
}
