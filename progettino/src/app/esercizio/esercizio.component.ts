import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.scss'],
})
export class EsercizioComponent {
  userName: string = 'Nome Bello';
  show: boolean = false;
  clickOnButton: Date[] = [];

  ngOnInit() {
    console.log(this.clickOnButton);
  }

  showList() {
    this.clickOnButton.push(new Date());
    this.show = true;
    //this.show=!this.show
  }

  resetName() {
    if (this.userName != '') {
      this.userName = '';
    }
  }
}
