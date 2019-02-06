import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerElement} from '../serverElement.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreate = new EventEmitter<ServerElement>();
  @Output() blueprintCreate = new EventEmitter<ServerElement>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    const server = new ServerElement(
      nameInput.value,
      'server',
      this.serverContentInput.nativeElement.value);

    this.serverCreate.emit(server);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    const blueprint = new ServerElement(
      nameInput.value,
      'blueprint',
      this.serverContentInput.nativeElement.value);

    this.blueprintCreate.emit(blueprint);
  }
}
