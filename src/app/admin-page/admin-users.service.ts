import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private _http: HttpClient) { }

  postDataProfile(token: string){
    const tokenA = 'Bearer ' + token;
    console.log(tokenA);
    return this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/admin/users', { headers: new HttpHeaders({ 'Authorization': tokenA })} )
  }
}
