import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService {

  public token$ = new Subject<any>(); // Данные токена
  public userProfile$ = new Subject<any>(); // Данные профиля
  
  public tokenUser(count: any) {
    this.token$.next(count); 
  };
  
  public takeDataProfile(count: any) {
    this.userProfile$.next(count); 
  };
  
  constructor() {}

  

} // Принять данные из сервиса юзер дата ин и направить их в нав компонент
