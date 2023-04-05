import { Component, OnInit } from '@angular/core';
import { ServersInfoService } from './servers-info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public toggleList: boolean = true;
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

  constructor(private _servers: ServersInfoService) {}

  ngOnInit() {
  }
}
