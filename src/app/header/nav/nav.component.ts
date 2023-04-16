import { Component, OnInit } from '@angular/core';
import { UserResolveService } from 'src/app/sign-in/user-resolve.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isShown = false;
  public userIconNav = false;
  public usersPage = false;

  constructor (private readonly resolveService: UserResolveService) { }
  
  ngOnInit() { // Надо будет рефакторинг устроить:

    // Проверка на пользователя:
    if(sessionStorage.getItem('userID') !== null) {
      // Изменения при авторизации сюда
        if(sessionStorage.getItem('userRole') === 'admin') {
          this.usersPage = true;
          console.log(sessionStorage.getItem('userRole'));
        } else {
          this.usersPage = false;
        }
      this.userIconNav = true;
    } else {
      this.userIconNav = false;
    }
    console.log(sessionStorage.getItem('userID') );
    //sessionStorage.clear();

    // Для моментального обновления при авторизации:
    this.resolveService.userProfile$.subscribe(
      value => { 
        if(value.data.user !== undefined) {
          
            if(value.data.user.role === 'admin') {
              this.usersPage = true;
              console.log(value);
            }
          this.userIconNav = true;
        } 
      },
    );
  }
}
