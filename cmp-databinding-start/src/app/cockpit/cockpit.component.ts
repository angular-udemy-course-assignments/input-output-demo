import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerElement} from '../serverElement.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreate = new EventEmitter<ServerElement>();
  @Output() blueprintCreate = new EventEmitter<ServerElement>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    const server = new ServerElement(this.newServerName,
      'server', this.newServerContent);
    this.serverCreate.emit(server);
  }

  onAddBlueprint() {
    const blueprint = new ServerElement(this.newServerName,
      'blueprint', this.newServerContent);
    this.blueprintCreate.emit(blueprint);

}
