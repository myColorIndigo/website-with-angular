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
    console.log('on');
    const myServer = document.getElementById('serverID') as HTMLInputElement;
    fromEvent(myServer, 'input').subscribe((e: Event) => {
      let inputContent = (e.target as HTMLInputElement).value;
      console.log(inputContent);
    });
  }
}
