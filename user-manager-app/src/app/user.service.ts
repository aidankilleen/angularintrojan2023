import { Injectable } from '@angular/core';
import { UserHttpService } from './user-http.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users: User[] = [];

  constructor(private userHttpService: UserHttpService) { 

    this.userHttpService.getUsers()
      .subscribe(users => this.users = users);
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(userToAdd: User) {

    this.userHttpService.addUser(userToAdd)
      .subscribe(addedUser => {
        this.users.push(addedUser);
      })

  }
  
  deleteUser(id: number) {
    this.userHttpService.deleteUser(id)
      .subscribe(()=> {
        // remove this user from list
        let index = this.users.findIndex(user=>user.id == id);
        this.users.splice(index, 1);
      });
  }  

  updateUser(user: User) {
    this.userHttpService.updateUser(user)
      .subscribe(()=> {
        console.log("saved");
      })
  }

}
