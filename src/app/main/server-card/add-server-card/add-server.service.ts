import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddServerService {

  constructor() { }

  postServer(server: any) {
    console.log(server);
  }
}
