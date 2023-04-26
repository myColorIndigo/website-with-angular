import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { UserResolveService } from './user-resolve.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
    
  private statusToken: any;
  private tokenDataProfile: any;

  public statusError: any;

  constructor(private _http: HttpClient, private router: Router, private readonly userResolveService: UserResolveService){ }

  postData(user: User) {

    const body = {email: user.email, password: user.password};

    const tokenUser = this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body);

    return tokenUser.subscribe({
      next: (statusToken) => {
        this.statusToken = statusToken;
        this.getUser();
      },
      error: (error) => this.statusError = error
    });
  }
  
  getUser() {
    console.log(this.statusToken);

    const tokenUser = 'Bearer ' + this.statusToken?.token;

    const getProfileUser = this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenUser })})
    
    return getProfileUser.subscribe( tokenDataProfile => {
      this.tokenDataProfile = tokenDataProfile;
      this.resolveProfileAndToken();
    });
  }
  
  resolveProfileAndToken() {
    console.log(this.tokenDataProfile); // Возможно раздробить код ниже на конкретные функции 
    
    sessionStorage.setItem('userName', this.tokenDataProfile.data.user.name);
    sessionStorage.setItem('userRole', this.tokenDataProfile.data.user.role);
    sessionStorage.setItem('userEmail', this.tokenDataProfile.data.user.email);
    sessionStorage.setItem('userID', this.tokenDataProfile.data.user.id);
    if (this.tokenDataProfile.data.user.role === 'admin') { // Возможно не стоит этот токен админа передавать в сторейдж
      sessionStorage.setItem('adminToken', this.statusToken.token);
    }
    this.guardUser();
    this.guardAdmin();

    this.router.navigate(['']); // Переход на другую страницу, мб не совсем правильно и придется переделать 
  
    return this.userResolveService.takeDataProfile(this.tokenDataProfile), this.userResolveService.tokenUser(this.statusToken);
  };

  messageError() {
    return this.statusError;
  }

  guardUser() {
    if (sessionStorage.getItem('userID') !== null) {
      return true;
    }
    this.router.navigate(['sign-in']);
    return false;
  }

  guardSignIn() {
    if (sessionStorage.getItem('userID') !== null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  guardAdmin() {
    if (sessionStorage.getItem('userRole') === 'admin') {
      return true;
    }
    this.router.navigate(['sign-in']);
    return false;
  }

}
