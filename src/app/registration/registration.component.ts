import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor() {}
  
  addUser(form: NgForm) {
    console.log(form);
    console.log(form.controls['name'].valid);
    console.log(form.controls['name'].value);
    //console.log(form.controls['email'].valid);
  }
}
