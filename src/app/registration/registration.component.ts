import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public nameInvalid: boolean = false;
  public emailInvalid: boolean = false;
  public repeatPasswordInvalid: boolean = false;

  constructor(private _http: RegistrationService) {}
  
  addUser(registrationForm: NgForm) {
    //console.log(form);
    //console.log(form.controls['email'].valid);
    
    if (registrationForm.controls['name'].valid) {
      this.nameInvalid = false;
    } else {
      this.nameInvalid = true;
    }

    if (registrationForm.controls['email'].valid) {
      this.emailInvalid = false;
    } else {
      this.emailInvalid = true;
    }
    // Добавить продуманную валидацию для пароля
    if (registrationForm.controls['password'].value === registrationForm.controls['repeatPassword'].value) {
      this.repeatPasswordInvalid = false;
    } else {
      this.repeatPasswordInvalid = true;
    }

    if (registrationForm.valid === true) {
      return this._http.postData(registrationForm.value);
    } else {
      return false;
    }
  }
}
