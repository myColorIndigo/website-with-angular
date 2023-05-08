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

  constructor(private _http: HttpClient, private router: Router, private readonly userResolveService: UserResolveService){ }

  // Отправка данных авторизации, получение токена:
  postData(user: User) {

    const body = {email: user.email, password: user.password};

    const tokenUser = this._http.post('https://hasu.monster/api/login', body);

    tokenUser.subscribe({
      next: (statusToken) => {
        this.statusToken = statusToken;
        this.getUser();
      }});

    return tokenUser;
  }
  
  // Отправка токена, получение всех данных юзера:
  getUser() {
    console.log(this.statusToken);

    const tokenUser = 'Bearer ' + this.statusToken?.data.token;

    const getProfileUser = this._http.get('https://hasu.monster/api/user', { headers: new HttpHeaders({ 'Authorization': tokenUser })})
    
    return getProfileUser.subscribe( tokenDataProfile => {
      this.tokenDataProfile = tokenDataProfile;
      this.resolveProfileAndToken();
    });
  }
  
  // Запись данных в хранилище, отключение гардов, смена страницы, передача данных в resolve сервис:
  resolveProfileAndToken() {
    console.log(this.tokenDataProfile); // Возможно раздробить код ниже на конкретные функции 
    
    // !!!Добавить внесение аватара в хранилище и далее распределить его по компонентам (и возможно прописать нейтральный аватар для незареганых юзеров)
    sessionStorage.setItem('userName', this.tokenDataProfile.name);
    sessionStorage.setItem('userRole', this.tokenDataProfile.is_admin);
    sessionStorage.setItem('userEmail', this.tokenDataProfile.email);
    sessionStorage.setItem('userID', this.tokenDataProfile.id);
    sessionStorage.setItem('userAvatar', this.tokenDataProfile.avatar);
    sessionStorage.setItem('userToken', this.statusToken.data.token);
    /*
    if (this.tokenDataProfile.is_admin === 1) { // Возможно не стоит этот токен админа передавать в сторейдж, а если стоит, то мб сделать просто token а не деление на разных 
      sessionStorage.setItem('adminToken', this.statusToken.data.token);
    } else {
      console.log(sessionStorage.getItem('userToken'));
    }
    */
    this.guardUser();
    this.guardAdmin();

    this.router.navigate(['']); // Переход на другую страницу, мб не совсем правильно и придется переделать 
  
    return this.userResolveService.takeDataProfile(this.tokenDataProfile), this.userResolveService.tokenUser(this.statusToken);
  };

  // Гарды:
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
    if (sessionStorage.getItem('userRole') === '1') {
      return true;
    }
    this.router.navigate(['sign-in']);
    return false;
  }

}
