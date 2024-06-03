import { Component, Input, Output, computed, input, signal, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  OnSelectUser(){
    this.select.emit(this.user.id);
  }

}
