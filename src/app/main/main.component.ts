import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ServersInfoService } from './servers-info.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit , OnInit, OnDestroy {

  @ViewChild('btn', { static: true }) button: any;
  
  public searchInputData: string = '';
  public toggleList: boolean = true; // Возможно стоит к кнопкам фильров применить *ngIf и сделать toggle
  public servers: any = [];
  
  buttonSubscription: any;

  constructor(private elm: ElementRef, private _servers: ServersInfoService) {}

  search() {
    let serversCount: any = [];
    let searchForName = this._servers.servers.map((item: { name: string; }) => item.name).filter((word: string) => {
      if (word.toLowerCase().indexOf(this.searchInputData.toLowerCase()) !== -1) {
        console.log(word);
        for (let i = 0; i < this._servers.servers.length; i++) {

          if (this._servers.servers[i].name === word) {
            console.log(this._servers.servers[i]);
            serversCount.push(this._servers.servers[i]);
            console.log(serversCount);
          }
          
        }
      }
    });
    console.log(serversCount);
    this.servers = serversCount;
    // this.servers = serversCount; Разобраться с изменением *ngFor, т.к. неуверен что можно будет изменить компонент поверх ангуляра, или попробовать изменить структуру HTML напрямую
  }

  ngOnInit() {
    this.servers = this._servers.getServers();
    const myInput = document.getElementById('SearchServer') as HTMLInputElement;
    const search = fromEvent(myInput, 'input');
    search.pipe(debounceTime(400)).subscribe((e: Event) => {
      let inputContent = (e.target as HTMLInputElement).value;
      // console.log(inputContent);
      if (inputContent !== '') {
        this.searchInputData = inputContent;
      }
    });

  }

  
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
}
