import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
    
    public statusToken: any;
    public tokenDataProfile: any;
  
    constructor(private _http: HttpClient){ }
 
    async postData(user: User){
      
      const body = {email: user.email, password: user.password};

      let promise = new Promise((resolve) => {
        this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/auth/login', body).subscribe( statusToken => resolve(this.statusToken = statusToken));
      });

      console.log(await promise);

      const tokenUser = 'Bearer ' + this.statusToken?.token;

      return this._http.get('http://learn-golang.eu-central-1.elasticbeanstalk.com/api/users/me', { headers: new HttpHeaders({ 'Authorization': tokenUser })}).subscribe( tokenDataProfile => this.tokenDataProfile = tokenDataProfile);
    };
    
}
