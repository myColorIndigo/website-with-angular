import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
    
    public statusToken: any;
    public tokenDataProfile: any = {name:'null'}; // передает пустое значение профиля в компоненты, до изменения от сервера
  
    constructor(private _http: HttpClient){ }
 
    postData(user: User){
          
      const body = {email: user.email, password: user.password};
      return this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body).subscribe( statusToken => this.statusToken = statusToken); 
    }
    
    requestProfileToken() {
      const tokenA = 'Bearer ' + this.statusToken?.token;
      console.log(tokenA);
      return this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenA })}).subscribe( tokenDataProfile => this.tokenDataProfile = tokenDataProfile);
    };
    
}
