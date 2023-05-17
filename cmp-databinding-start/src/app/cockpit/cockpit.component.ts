import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  /* newServerName = '';
  newServerContent = ''; */

  //nelle parentesi, mettto static true e il nome di riferimento, la local reference!
  //
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServerEmit(serverNameInput: HTMLInputElement) {
    /// qua mi passa il valore direttamentte dell'input
    console.log(serverNameInput.value);

    // qua mi fa vedere l'element ref
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprintEmit(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
