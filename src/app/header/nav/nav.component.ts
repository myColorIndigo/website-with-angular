import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResolveService } from 'src/app/sign-in/user-resolve.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isShown = false;
  public userIconNav = false;

  constructor (private _token: ActivatedRoute) {
    this._token.data.subscribe(data => console.log(data)); // An observable of the static and resolved data of this route.
    //сделать нормальную передачу данных
  }
  
  ngOnInit() {
    console.log(this._token.data.subscribe(data => console.log(data)));
  }
}
