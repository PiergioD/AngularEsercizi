import { Component } from '@angular/core';

// il decoratore component ci dice che questa classe è un componente
// il selector è il tag html che potra essere utilizzato per richiamare il componente
// template url dirà ovviamente html colleggato del componente
//  style urls dirà invece lo stile collegato al componente
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
