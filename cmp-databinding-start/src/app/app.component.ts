import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'just a test!' },
  ];

  onAddServer(serverdata: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent,
    });
  }

  onAddBlueprint(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
