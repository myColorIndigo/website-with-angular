import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Сделать функционал замены аватарки, отправку данных на сервер и возможно моментальную замену в хранилище

  public imgAvatarUrl: any = '';
  public imgAvatar: any = '';

  constructor(private _data: SettingsService) {}

  onSubmit(profileForm: NgForm) {
    const selectedFile = document.getElementById('file-upload') as HTMLInputElement;
    
    // console.log(profileForm);
    
    if (selectedFile.files?.length !== 0 && selectedFile.files !== null) {
      // console.log(selectedFile.files[0]);
      profileForm.value['file-upload'] = selectedFile.files[0];
      console.log(profileForm);
    }

    if (profileForm.valid === true) { // Переделать условия, тк валидация всегда true
      this._data.postData(profileForm.value).subscribe(value => {
        console.log(value);
        // sessionStorage.setItem('userAvatar', value); 
      }); // Возможно переделать получение данных для замены ссылки на актуальный аватар
    }
  }

  ngOnInit() { // Получение фейкового аватара из хранилища:
    this.imgAvatarUrl = sessionStorage.getItem('userAvatar');

    this.dropboxAvatar();
  }

  // Функция получения файла:
  uploadFileAvatar() {
    const selectedFile = document.getElementById('file-upload') as HTMLInputElement;
    if (selectedFile.files?.length !== 0 && selectedFile.files !== null) {
      console.log(selectedFile.files[0]);
      return selectedFile.files[0];
    }
    return false;
  }

  // Функции под дропбокс:

  dropboxAvatar() {
    const dropbox = document.getElementById("dropbox") as HTMLElement;
    if (dropbox !== null) {
      dropbox.addEventListener("dragenter", this.dragenter, false);
      dropbox.addEventListener("dragover", this.dragover, false);
      dropbox.addEventListener("drop", this.drop, false);
    }
  }

  dragenter(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }
  
  dragover(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  drop(e: any) {
    e.stopPropagation();
    e.preventDefault();
  
    let dt = e.dataTransfer;
    let files = dt.files;
  
    this.imgAvatar = files[0];
    console.log(this.imgAvatar);

    // console.log(files); Не хватает только анимации дропа файла и ограничения в 1 файл
    // handleFiles(files);
  }
}
