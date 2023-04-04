import { Component, Output, EventEmitter } from '@angular/core';
import Kitten from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  kitten:Kitten = new Kitten("Toto","Chat","01/01/2001","http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb");

  @Output()
  onCreateKitten: EventEmitter<Kitten> = new EventEmitter(); 
  onSubmit() : void {
    this.onCreateKitten.emit(this.kitten);
  }
}
