import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  // Сделать запрос на установку аватарки из хранилища и собственно прописать замену аватара (возможно через обсервабл с получением обновленных данных аватара из хранилища)

  public imgAvatar: any = '';

  constructor() {}

  ngOnInit() {
    // Простая форма установки аватара (фейкового):
    this.imgAvatar = sessionStorage.getItem('userAvatar');
  }

}
