import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ServersInfoService } from './servers-info.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // @ViewChild('btn', { static: true }) button: any;
  
  public searchInputData: string = '';
  public toggleList: boolean = true; // Возможно стоит к кнопкам фильров применить *ngIf и сделать toggle
  public servers: any = [];

  public isOnFilterName: boolean = false;
  public isOnFilterOnline: boolean = false;
  public isOnFilterMap: boolean = false;
  
  // buttonSubscription: any;

  constructor(private elm: ElementRef, private _servers: ServersInfoService) {}

  search() {
    let serversCount: any = [];
    let searchForName = this._servers.servers.map((item: { name: string; }) => item.name).filter((word: string) => {
      if (word.toLowerCase().indexOf(this.searchInputData.toLowerCase()) !== -1) {
        // console.log(word);
        for (let i = 0; i < this._servers.servers.length; i++) {

          if (this._servers.servers[i].name === word) {
            // console.log(this._servers.servers[i]);
            serversCount.push(this._servers.servers[i]);
            // console.log(serversCount);
          }
          
        }
      }
    });
    // console.log(serversCount);
    this.servers = serversCount;
  }

  ngOnInit() {
    this.servers = this._servers.getServers();
    const myInput = document.getElementById('SearchServer') as HTMLInputElement;
    const search = fromEvent(myInput, 'input');
    search.subscribe((e: Event) => {
      let inputContent = (e.target as HTMLInputElement).value;
      // console.log(inputContent);
      if (inputContent !== '') {
        this.searchInputData = inputContent;
      } else {
        this.servers = this._servers.servers;
      } // Моментального изменения на странице, возможно придется изменить
    });

  }

  filterName() {
  //  this.servers = this.servers.map((item: { name: string; }) => item.name).filter((word: string) => {});
  }

  filterOnline() { // Возможно немного переделать
    if (this.isOnFilterOnline === false) {
      this.servers = this.servers.sort(function(a: any, b: any) {
        if (a.online > b.online) {
          return -1;
        }
        if (a.online < b.online) {
          return 1;
        }
        return 0;
      });

      this.isOnFilterOnline = true;
    } else {
      this.servers = this.servers.sort(function(a: any, b: any) {
        if (a.online > b.online) {
          return 1;
        }
        if (a.online < b.online) {
          return -1;
        }
        return 0;
      });
      
      this.isOnFilterOnline = false;
    }
    
  }

  filterMap() {

  }

  /*
  ngAfterViewInit() {
    this.buttonClick();
  }
 
 
  buttonClick() {
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click')
        .pipe(debounceTime(300))
        .subscribe(res => console.log(res));
  }
 
 
  ngOnDestroy() {
    this.buttonSubscription.unsubscribe()
  }
  */
}
