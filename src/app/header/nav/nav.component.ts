import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UserResolveService } from 'src/app/sign-in/user-resolve.service';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isShown = false;
  public userIconNav = false;
  public usersPage = false;
  public bannerShown = false;

  public imgAvatar: any = '';

  constructor (private readonly resolveService: UserResolveService, private _data: NavService) { }
  
  ngOnInit() { // Надо будет рефакторинг устроить:

    // Проверка на пользователя:
    if(sessionStorage.getItem('userID') !== null) {
      // Изменения при авторизации сюда
      if(sessionStorage.getItem('userRole') === '1') {
        this.usersPage = true;
        //console.log(sessionStorage.getItem('userRole'));
      } else {
        this.usersPage = false;
      }

      this.imgAvatar = sessionStorage.getItem('userAvatar');
      this.userIconNav = true;
    } else {
      // Первая строчка хранилище фейкового аватара, которая должна быть выше для реального запроса:  

      this.userIconNav = false; // Замена на иконку, если без сервера
    }
    //console.log(sessionStorage.getItem('userID') );
    //sessionStorage.clear();

    // Для моментального обновления при авторизации:
    this.resolveService.userProfile$.subscribe(
      value => { 
        if(value !== undefined) {
          this.usersPage = false;
          
            if(value.is_admin === 1) {
              this.usersPage = true;
              // console.log(value);
            }
          this.imgAvatar = value.avatar;
          this.bannerShown = true;
          this.userIconNav = true;
        } 
      },
    );
      
    // Простой пункт сворачивания меню при клике вне него
    fromEvent(document.body, 'click').subscribe((e: Event) => {
      let myDropdownMenu = document.getElementById('dropdownMenu') as HTMLElement;
      // console.log(myDropdownMenu.children);
      if (e.target !== myDropdownMenu) {
        this.isShown = false;
        // console.log(e.target);
      }
    });

    // Сделать замену аватарки (возможно через обсервабл с получением обновленных данных аватара из хранилища)
  }

  signOut() {
    this._data.getLogout().subscribe(value => console.log(value));
    this.userIconNav = false;
    sessionStorage.clear();
    // Команда при клике удаялет токен по get запросу, сбрасывает все стореджи и редиректит пользователя на главную
  }
}
