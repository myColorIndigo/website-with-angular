import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
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
  
  ngOnInit() {
    this.resolveService.userProfile$.subscribe(
      value => { 
        if(value.data.user !== undefined) {
          // Изменения при авторизации сюда
            if(value.data.user.role === 'admin') {
              this.usersPage = true;
              console.log(value);
            }
          this.userIconNav = true;
        } 
      },
    ); 
    /*
    fromEvent(document, 'click').subscribe(() => {
      // Переделать залупу
      if(this.isShown === true) {
        console.log( this.isShown );
        this.isShown = false;
        console.log( this.isShown );
      }
    });
    */
  }
}
