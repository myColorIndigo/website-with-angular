import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Сделать функционал замены аватарки, отправку данных на сервер и возможно моментальную замену в хранилище
  // Подпункты: Разобраться с функционалом внесения файла через HTML
  //            Сделать сервис с передачей обновленных данных (файла) на сервер
  //            Фейковое обновление данных на сервере и внесение изменений в компоненте с заменой строки аватара 

  public imgAvatar: any = '';

  constructor() {}

  onSubmit(profileForm: NgForm) {
    const selectedFile = document.getElementById('file-upload') as HTMLInputElement;
    
    console.log(profileForm);
    
    if (selectedFile.files?.length !== 0 && selectedFile.files !== null) {
      console.log(selectedFile.files[0]);
      
    }
  }

  ngOnInit() { // Получение фейкового аватара из хранилища:
    this.imgAvatar = sessionStorage.getItem('userAvatar');
  }

}
