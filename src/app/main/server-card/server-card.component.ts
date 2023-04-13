import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersInfoService } from '../servers-info.service';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit {

  public server: any = {};

  public id:any = { serverID: null }; // Поменял id на строковое в базах данных, для того чтобы передача значения как параметр в стоку совпадала типами данных

  constructor(private route: ActivatedRoute, private _servers: ServersInfoService) {
    this.route.params.subscribe(params => this.id = params);
  }

  ngOnInit() { // Возможно заменить oninit на другой ng
    this.server = this._servers.getServers().find((servers: any) => {
      
      if (servers.id === this.id.serverID) {
        return this.server = servers;
      }
    });
    
  }
}
