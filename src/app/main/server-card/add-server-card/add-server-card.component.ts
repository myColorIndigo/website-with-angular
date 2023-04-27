import { Component } from '@angular/core';
import { AddServerService } from './add-server.service';

@Component({
  selector: 'app-add-server-card',
  templateUrl: './add-server-card.component.html',
  styleUrls: ['./add-server-card.component.css']
})
export class AddServerCardComponent {
  
  constructor(private _addServer: AddServerService) {}

  addServer() {
    const myServer = document.getElementById('serverID') as HTMLInputElement;
    // console.log(myServer.value);
    this._addServer.postServer(myServer.value);
  }
}
