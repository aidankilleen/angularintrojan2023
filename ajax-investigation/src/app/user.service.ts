import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", false), 
    new User(4, "Dan", "dan@gmail.com", true), 
    new User(5, "Eve", "eve@gmail.com", false)
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user:User) {
    this.users.push(user);
  }

  updateUser(user:User) {

  }

  deleteUser(id: number) {

    let index = this.users.findIndex(user => user.id == id);
    this.users.splice(index, 1);
  }


}
