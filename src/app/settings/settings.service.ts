import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private _http: HttpClient) { }

  postData(valueData: any) {
    this._http.post('https://jsonplaceholder.typicode.com/posts', valueData).subscribe(value => console.log(value));
  }
}
