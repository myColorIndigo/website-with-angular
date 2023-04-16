import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { UserResolveService } from './user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
    
  private statusToken: any;
  private tokenDataProfile: any;

  constructor(private _http: HttpClient, private readonly userResolveService: UserResolveService){ }

  async postData(user: User){
    
    const body = {email: user.email, password: user.password};

    let promiseToken = new Promise((resolve) => {
      this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body).subscribe( statusToken => resolve(this.statusToken = statusToken));
    });

    console.log(await promiseToken); // Прописать замену с await

    const tokenUser = 'Bearer ' + this.statusToken?.token;

    let promiseProfile = new Promise((resolve) => {
      this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenUser })}).subscribe( tokenDataProfile => resolve(this.tokenDataProfile = tokenDataProfile));
    });

    console.log(await promiseProfile); // Прописать замену с await
    
    sessionStorage.setItem('userName', this.tokenDataProfile.data.user.name);
    sessionStorage.setItem('userRole', this.tokenDataProfile.data.user.role);
    sessionStorage.setItem('userEmail', this.tokenDataProfile.data.user.email);
    sessionStorage.setItem('userID', this.tokenDataProfile.data.user.id);
    this.guardUser();
    this.guardAdmin();
    return this.userResolveService.takeDataProfile(await promiseProfile), this.userResolveService.tokenUser(await promiseToken);
  };

  guardUser() {
    if (sessionStorage.getItem('userID') !== null) {
      return true;
    }
    return false;
  }

  guardAdmin() {
    if (sessionStorage.getItem('userRole') === 'admin') {
      return true;
    }
    return false;
  }

}
