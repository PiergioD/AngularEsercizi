import { Component } from '@angular/core';

// l'inline code del template è utile se ci sono poche righe di codice html. piu grande si usa html direttamente
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server Created!';
  serverName = 'TestServer';
  serverCreated: boolean = false;
  serversArray = ['testsrver', 'testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serversArray.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
