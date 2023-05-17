import { Component, OnInit } from '@angular/core';
import { ServersInfoService } from '../main/servers-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public servers: any = [];

  constructor(private _servers: ServersInfoService) {}

  ngOnInit() {
    this.servers = this._servers.getServers();
  }
}
