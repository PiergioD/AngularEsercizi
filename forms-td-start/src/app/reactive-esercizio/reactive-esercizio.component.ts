import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-reactive-esercizio',
  templateUrl: './reactive-esercizio.component.html',
  styleUrls: ['./reactive-esercizio.component.css'],
})
export class ReactiveEsercizioComponent implements OnInit {
  statusProgetti: string[] = ['Stable', 'Critical', 'Finished'];
  nomiProibito: string[] = ['Test', 'test'];
  constructor() {}

  esercizioForm: FormGroup;

  ngOnInit(): void {
    this.esercizioForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.validName.bind(this)
      ),
      email: new FormControl(null, [Validators.email, Validators.required]),
      projectStatus: new FormControl('Stable', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.esercizioForm.value);
    this.esercizioForm.reset({
      projectName: '',
      email: '',
      projectStatus: '',
    });
  }

  // col settmeout simulo una chiamata dal backend
  validName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        // se il valore dellinput è presente nell'array eha come indice diverso da -1(quindi  che esiste(indexof da -1 se non esiste) )
        if (this.nomiProibito.indexOf(control.value) != -1) {
          return resolve({ nomeIsForbidden: true });
        } else return resolve(null);
      }, 1000);
    });
    return promise;
  }
}
