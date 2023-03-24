import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService {

  public token$ = new ReplaySubject<any>(); // Данные токена
  public userProfile$ = new ReplaySubject<any>(); // Данные профиля
  
  public tokenUser(token: any) {
    this.token$.next(token); 
  };
  
  public takeDataProfile(data: any) {
    this.userProfile$.next(data); 
  };
  
  constructor() {}

  

} // Принять данные из сервиса юзер дата ин и направить их в нав компонент
