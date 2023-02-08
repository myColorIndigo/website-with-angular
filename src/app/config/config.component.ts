import { Component, OnInit } from '@angular/core';
import { VersionService } from './version.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public version: any;

  constructor (private _versionService: VersionService) {}

  ngOnInit() {
    this._versionService.getAll().subscribe(version => this.version = version);
  }

}
