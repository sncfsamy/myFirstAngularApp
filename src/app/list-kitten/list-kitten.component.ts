import { Component, EventEmitter, Output, Input } from '@angular/core';
import Kitten from '../models/kitten.model';
@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  @Output()
  onTakeKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();
  takeKitten(kitten:Kitten) : void {
    this.onTakeKitten.emit(kitten);
    this.kittenList.splice(this.kittenList.indexOf(kitten),1);
  }
  @Input()
  kittenList:Kitten[]=[];
}
