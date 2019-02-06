import { Component } from '@angular/core';
import {ServerElement} from './serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [];


  onAddServer(serverElement: ServerElement) {
    this.serverElements.push(serverElement);
  }

  onAddBlueprint(serverElement: ServerElement) {
    this.serverElements.push(serverElement);
  }
}
