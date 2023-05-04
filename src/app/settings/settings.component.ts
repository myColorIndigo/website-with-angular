import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Сделать функционал замены аватарки, отправку данных на сервер и возможно моментальную замену в хранилище

  public imgAvatar: any = '';

  constructor() {}

  ngOnInit() { // Получение фейкового аватара из хранилища:
    this.imgAvatar = sessionStorage.getItem('userAvatar');
  }

}
