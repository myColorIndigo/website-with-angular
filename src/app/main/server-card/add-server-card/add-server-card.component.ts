import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-add-server-card',
  templateUrl: './add-server-card.component.html',
  styleUrls: ['./add-server-card.component.css']
})
export class AddServerCardComponent {
  
  constructor() {}

  addServer() {
    const myServer = document.getElementById('serverID') as HTMLInputElement;
    // console.log(myServer.value);

  }
}
