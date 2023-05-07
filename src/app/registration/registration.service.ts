import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class User {
  name!: string
  email!: string
  password!: string
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  postData(user: User) {

    const body = {name: user.name, email: user.email, password: user.password};

    return this._http.post('https://hasu.monster/api/register', body); // Заменить на передачу данных на сервер и добавить гарды 
  }
}
