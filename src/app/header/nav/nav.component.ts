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

  constructor (private readonly resolveService: UserResolveService) { }
  
  ngOnInit() {
    this.resolveService.count$.subscribe((count: any) => console.log(count));
  }
}
