import { Injectable } from '@angular/core';
import 'src/app/arrayServers.json';

@Injectable({
  providedIn: 'root'
})
export class ServersInfoService {
  public servers: any = [ // Надо private
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

  constructor() { }

  public getServers() {
    return this.servers;
  }
}
