import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['banana', 'pigiama'];

  // nel reactive form , lo creo diretametne nel typescript
  // le reactive form non ho bisogno del local reference
  // la differenza è che lo sincronizzi nle html, dopo di che , tutti i validators li metti nel ts
  // dichiaro il form group
  signUpForm: FormGroup;
  constructor(private route: Router) {}

  // il form deve essere inizializzato prima del templalte
  // possiamo avere un fromgroup dentro ad un altro fromgroup(nested)
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          this.forbiddenEmails.bind(this),
        ]),
      }),

      // il primo valore è il valore di default del input
      // il secondo valore sono i validators
      // validotaros required è lo stesso di scrivere reuired nel template, ma lo prende da un metodo statico dell'oggetto validators
      gender: new FormControl('male'),
      // voglio mettere nel form un array di hobbies
      hobbies: new FormArray([]),
    });
    // qui posso vedere lo satato del form , vedere se è valido, invalido pending
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    // qui posso settare  il valore  invece del form o usare patchValue per settare alcuni valori del form
    this.signUpForm.setValue({
      userData: { username: 'Max', email: 'max@test.com' },
      gender: 'male',
      hobbies: [],
    });
  }

  onSubmitReattive() {
    console.log(this.signUpForm);
    // reset mi clear tutto il form
    this.signUpForm.reset();
  }

  // ricavi l'array di hobbies e ci fai un ngfor nel template
  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  // aggiungi un hobby nel array hobbies con un nuovo input chiamato control
  // nella custom validtors, bind(this), si riferisce a questo oggetto perche non la stiamo chiamando dentro la classe, ma la sta chiamando angular!
  addHobby() {
    const control = new FormControl(null, [Validators.required, ,]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  // creiamo un custom validators
  // non vgolio che questi nomi siano availbale
  // il responso devee essere un oggettto che  con key string con valore boolean
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { nameIsForbidden: true };
    } else return null;
  }

  // faccio un validators asyncrono che simula in check se l'ìeamil e valida o no
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForidden: true });
        } else resolve(null);
      }, 1500);
    });
    return promise;
  }
}
