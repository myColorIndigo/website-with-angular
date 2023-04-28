import { Component } from '@angular/core';

export class User {
  name!: string;
  email!: string;
  password!: string;
  repeatPassword!: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: User = new User();

  constructor() {}
  
  addUser() {
    if(this.user.password === this.user.repeatPassword) {
      console.log(this.user);

    }
  }
}
