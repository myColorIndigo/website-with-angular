import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserResolveService } from '../sign-in/user-resolve.service';

export class User {
  name!: string
  email!: string
  password!: string
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient, private router: Router, private readonly userResolveService: UserResolveService) { }

  postData(user: User) {

    const body = {name: user.name, email: user.email, password: user.password};

    return this._http.post('https://hasu.monster/api/register', body).subscribe(value => {
      console.log(value);
      this.userStorage(body, value);
    }); // Заменить на передачу данных на сервер и добавить гарды 
  }
  // Запись данных в хранилище:
  userStorage(userData: any, serverData: any) {
    sessionStorage.setItem('userName', userData.name);
    sessionStorage.setItem('userRole', '0');
    sessionStorage.setItem('userEmail', userData.email);
    sessionStorage.setItem('userToken', serverData.token);

    console.log(sessionStorage);
    
    this.guardUser();

    this.router.navigate(['']);

    return this.userResolveService.takeDataProfile(userData);
  }

  // Гарды юзера при регистрации:
  guardUser() {
    
  }
}
