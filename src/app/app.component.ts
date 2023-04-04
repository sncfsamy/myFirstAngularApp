import { Component } from '@angular/core';
import Kitten from './models/kitten.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kittenList: Kitten[] = [];
  userKittenList: Kitten[] = [];
  onCreateKitten(kitten: Kitten) : void {
    this.kittenList.push(kitten);
  }
  onTakeKitten(kitten: Kitten) : void {
    this.userKittenList.push(kitten);
  }
}
