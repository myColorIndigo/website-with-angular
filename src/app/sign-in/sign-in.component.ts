import { Component, OnInit } from '@angular/core';
import { UserDataInService } from './user-data-in.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public messageError: any;
  public blockError: boolean = false;

  constructor (private _data: UserDataInService) {}

  onSubmit(f: NgForm) { // Добавить аналог ответа ошибку и вывод на страницу
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    // console.log(f.controls['email'].valid);
    if (f.valid === false) {

    }
    // this._data.statusError = undefined;
    this._data.postData(f.value);
  }

  ngOnInit() {
    this._data.messageError();
    console.log(this._data.statusError);
    if (this._data.statusError !== undefined) {
      console.log(this._data.statusError);
      this.messageError = this._data.statusError?.error.message;
      this.blockError = true;
    }
  }
}
