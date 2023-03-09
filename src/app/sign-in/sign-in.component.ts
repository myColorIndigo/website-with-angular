import { Component } from '@angular/core';
import { UserDataInService } from './user-data-in.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  

  constructor (private _data: UserDataInService) {}

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this._data.postData(f.value);
    setTimeout(() => {
      this._data.requestProfileToken();
    }, 5000); 
    // переделать промис
  }
}
