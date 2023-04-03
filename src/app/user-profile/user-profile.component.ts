import { Component } from '@angular/core';
import User from './User';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  ageShowed = false;
  user: User = new User('Doe', 'John',25,'two beer or not to beer','https://randomuser.me/api/portraits/lego/2.jpg');
  toggleAgeShowed() {
    this.ageShowed = !this.ageShowed;
  }
}
