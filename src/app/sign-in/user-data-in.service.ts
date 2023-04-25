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

  async postData(user: User){
    
    const body = {email: user.email, password: user.password};

    let promiseToken = new Promise((resolve) => { // Написать ответ запроса с ошибкой авторизации как отдельную функцию для вывода в компонент
      this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body).subscribe({
        next: (statusToken) => resolve(this.statusToken = statusToken),
        error: (error) => resolve(this.statusError = error)
      });
    });
    
    console.log(await promiseToken); // Прописать замену с await

    if (this.statusError !== undefined) {
      return this.messageError();
    }
    const tokenUser = 'Bearer ' + this.statusToken?.token;

    let promiseProfile = new Promise((resolve) => {
      this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenUser })}).subscribe( tokenDataProfile => resolve(this.tokenDataProfile = tokenDataProfile));
    });

    console.log(await promiseProfile); // Прописать замену с await
    
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
  
    return this.userResolveService.takeDataProfile(await promiseProfile), this.userResolveService.tokenUser(await promiseToken);
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
