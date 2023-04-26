import { Component } from '@angular/core';
import { UserDataInService } from './user-data-in.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public messageError: any;
  public blockError: boolean = false;

  constructor (private _data: UserDataInService) {}

  onSubmit(f: NgForm) { // Добавить аналог ответа ошибку и вывод на страницу
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    // console.log(f.controls['email'].valid);
    // if (f.valid === false) {}
    this.blockError = false;
    this._data.postData(f.value).subscribe({
      error: (error) => this.errorShown(error)
    });
  }

  errorShown(_error: any) {
    this.messageError = _error.error.message;
    this.blockError = true;
  }
}
