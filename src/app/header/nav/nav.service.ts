import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResolveService } from 'src/app/sign-in/user-resolve.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private readonly resolveService: UserResolveService, private _http: HttpClient) { }

  // Выход из учетки с удалением токена:
  getLogout() {

    let tokenUser = '';

    this.resolveService.token$.subscribe( value => tokenUser = 'Bearer ' + value.data.token);
    
    tokenUser = 'Bearer ' + sessionStorage.getItem('userToken');
    //console.log(tokenUser);

    return this._http.get('https://hasu.monster/api/logout', { headers: new HttpHeaders({ 'Authorization': tokenUser })})
  }


}
