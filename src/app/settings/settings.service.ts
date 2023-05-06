import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private _http: HttpClient) { }

  // Отправка формы профиля:
  postDataProfile(valueData: any) {
    return this._http.post<any>('https://jsonplaceholder.typicode.com/posts', valueData);
  }

  // Отправка формы персональной информации:
  postDataPersonalInfo(valueData: any) {
    return this._http.post<any>('https://jsonplaceholder.typicode.com/posts', valueData);
  }

  // Отправка формы уведомлений:
  postDataNotifications(valueData: any) {
    return this._http.post<any>('https://jsonplaceholder.typicode.com/posts', valueData);
  }

}
