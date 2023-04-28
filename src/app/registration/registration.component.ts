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
  
  addUser(form: NgForm) {
    //console.log(form);
    //console.log(form.controls['email'].valid);

    if (form.controls['name'].valid) {
      this.nameInvalid = false;
    } else {
      this.nameInvalid = true;
    }

    if (form.controls['email'].valid) {
      this.emailInvalid = false;
    } else {
      this.emailInvalid = true;
    }

    if (form.controls['password'].value === form.controls['repeatPassword'].value) {
      this.repeatPasswordInvalid = false;
    } else {
      this.repeatPasswordInvalid = true;
    }

    if (form.valid === true) {
      return this._http.postData(form.value);
    }
  }
}
