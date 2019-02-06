import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerElement} from '../serverElement.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';
  @Output() serverCreate = new EventEmitter<ServerElement>();
  @Output() blueprintCreate = new EventEmitter<ServerElement>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    const server = new ServerElement(nameInput.value,
      'server', this.newServerContent);
    this.serverCreate.emit(server);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    const blueprint = new ServerElement(nameInput.value,
      'blueprint', this.newServerContent);
    this.blueprintCreate.emit(blueprint);

}
