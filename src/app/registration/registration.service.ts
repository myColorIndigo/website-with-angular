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

  constructor() { }

  postData(user: User) {

    const body = {name: user.name, email: user.email, password: user.password};

    return console.log(body); // Заменить на передачу данных на сервер и добавить гарды 
  }
}
