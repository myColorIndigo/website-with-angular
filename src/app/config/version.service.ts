import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private version = '0.2'

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/version');
  }

}
