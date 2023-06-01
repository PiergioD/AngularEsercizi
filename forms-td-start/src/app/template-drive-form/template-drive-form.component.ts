import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css'],
})
export class TemplateDriveFormComponent implements OnInit {
  // accedo al form grazie al view child
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  submitted: boolean = false;

  constructor(private route: Router) {}

  // questo è l'oggetto del form che verrà updato col form
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    // setto tutto e updato user
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // questo mteodo al click del bottone mette del nome e setta altri valori del form su come sono scritti nell'oggetto in setValue( ma setta gli altri valori a vuoto)
  suggestUserName() {
    /* const suggestedName = 'Superuser';
   // setta il valore del form
   this.signupForm.setValue({
     userData: {
       username: suggestedName,
       email: '',
     },
     secret: 'pet',
     questionAnswer: '',
     gender: 'male',
   }); */
    // cosi facendo invvece setti il valore dello username e non setti gli altri a vuoto, con patchvalue
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  ngOnInit(): void {}
}
