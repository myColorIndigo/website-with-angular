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
  public servers: any = [
    {
        "name": "CS2 RETAKE #2",
        "status": 1,
        "address": "23.88.25.137:27026",
        "game": "CS2",
        "online": 0,
        "map": "dust_2",
        "location": "Germany",
        "hosting": "not found",
        "id": 296553,
        "update": 1680461173,
        "ping": 30,
        "upTime": 100,
        "rang": 1,
        "globalRang": 3,
        "site": "none"
    },
    {
        "name": "CS2 RETAKE #3",
        "status": 0,
        "address": "23.88.25.137:35235",
        "game": "CS2",
        "online": 2,
        "map": "dust_2",
        "location": "Germany",
        "hosting": "not found",
        "id": 154553,
        "update": 1680461173,
        "ping": 65,
        "upTime": 100,
        "rang": 1,
        "globalRang": 3,
        "site": "none"
    },
    {
        "name": "CS2 DM #1",
        "status": 1,
        "address": "23.88.25.137:68326",
        "game": "CS2",
        "online": 6,
        "map": "dust_2",
        "location": "GB",
        "hosting": "not found",
        "id": 296343,
        "update": 1680461173,
        "ping": 4,
        "upTime": 100,
        "rang": 23,
        "globalRang": 42,
        "site": "none"
    }

];
  buttonSubscription: any;

  constructor(private elm: ElementRef, private _servers: ServersInfoService) {}

  search() {
    const a = this.servers.map((item: { name: string; }) => item.name).filter((word: string) => {
      if (word.toLowerCase().indexOf(this.searchInputData.toLowerCase()) !== -1) {
        console.log(word);
        for (let i = 0; i < this.servers.length; i++) {
          if (this.servers[i].name === word) {
            console.log(this.servers[i]);
            this.servers = this.servers[i]; // Разобраться с изменением *ngFor, т.к. неуверен что можно будет изменить компонент поверх ангуляра, или попробовать изменить структуру HTML напрямую
          }
        }
      }
    });
  }

  ngOnInit() {
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
