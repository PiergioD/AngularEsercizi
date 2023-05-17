import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  //nelle parentesi, metti la local reference che vuoiu utilizzare!
  @ViewChild('heading', { static: true }) header: ElementRef;
  //ContentCHild  serve per ottenere riferimenti ai componenti/elementi figli che sono contenuti all'interno della vista del componente padre. È spesso utilizzato per ottenere riferimenti a un componente specifico all'interno del contenuto proiettato di un componente genitore tramite l'utilizzo della direttiva <ng-content>. Questo decoratore può essere utile per effettuare modifiche o operazioni all'interno del contenuto proiettato.
  @ContentChild('contentParagraph', { static: true }) paragrafo: ElementRef;

  // il constructor è il primo chiamato
  constructor() {
    console.log('contrusctor called');
  }

  // implementalo nella classe, è lunico lifecycle hook che passa argument, on changes è il secondo chiamato dopo il constructor
  // chiamato appena un bound input cambia, rreagisce ad un cambiamento
  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes called');
    // è un oggetto che punta a element
    console.log(changes);
  }

  // chiamato quando il componente viene inizializzato
  // il text content è vuoto!
  ngOnInit(): void {
    console.log('oninit called');
    console.log('TExt content' + this.header.nativeElement.textContent);
  }

  // chiamato ogni qualvolta qualcosa viene triggerato, quindi viene usato per qualcosa di molto legero
  ngDoCheck() {
    console.log('docheck called');
  }

  // chiamato solo una volta dopo che ng-content viene stampato
  ngAfterContentInit(): void {
    console.log('afterContentInit called');
    console.log(
      'Text content of paragraph: ' + this.paragrafo.nativeElement.textContent
    );
  }

  // chiamato ogni qualvolta il contentto stampato viene checkato?
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    console.log('AfterviewChecked called');
  }

  // qua invece posso vedere in console l'header
  ngAfterViewInit(): void {
    console.log('AfterViewInit called');
    console.log('TExt content' + this.header.nativeElement.textContent);
  }

  // chiamato quando il compoenente viene distrutto(eliminato)
  ngOnDestroy(): void {
    console.log('ngDestroy called');
  }
}
