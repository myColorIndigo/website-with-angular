import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserDataInService {
   
    constructor(private _http: HttpClient){ }
 
    postData(user: User){
          
        const body = {email: user.email, password: user.password};
        return this._http.post('http://learn-golang.eu-central-1.elasticbeanstalk.com/', body); 
    }
}
