import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private _http: HttpClient) { }

  postData(valueData: any) {
    return this._http.post<any>('https://jsonplaceholder.typicode.com/posts', valueData);
  }
}
