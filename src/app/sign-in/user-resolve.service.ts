import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService {

  public count$ = new Subject<unknown>();

  public changeCount(count: unknown) {
    this.count$.next(count); 
  };

  constructor() {}

} // Принять данные из сервиса юзер дата ин и направить их в нав компонент
