import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  generateRandomNumber() : number {
    return Math.floor(Math.random()*10);
  }
  number1 : number = this.generateRandomNumber();
  number2 : number = this.generateRandomNumber();
  total : number = 0;
}
