import { Component } from '@angular/core';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent {

  public server: any = {
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
    };

}
