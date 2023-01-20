import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './user-http.service';
import { User } from './user.model';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    
    <button (click)="onAddUser()">Add User</button>


    <table>
      <thead>
        <tr><th>Id</th><th>Name</th><th>Email</th><th>Active</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td><a [href]="'mailto:' + user.email">{{ user.email }}</a></td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td>
            
            <button 
            (click)="onDeleteUser(user.id)">
            Delete
            </button>
            <button
              (click)="onUpdateUser(user)"
            >
              Update
            </button>
            
          </td>
        </tr>
      </tbody>
    </table>

    <hr>

    <ts-investigation [user]="users[0]">

    </ts-investigation>

    {{ users | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ajax investigation';
  users: User[] = [];

  //public userService: UserService;

  constructor(public userService: UserHttpService) {
    //this.userService = userService;
  }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users)=> {
        this.users = users as User[];
      });

      // NB: ajax call is only made when the .subscribe() method is called
      // if nobody subscribes the request is not made
  }

  onDeleteUser(id: number) {

    if (confirm("Are you sure?")) {
      this.userService.deleteUser(id)
      .subscribe(()=>{
        //alert("deleted");
        let index = this.users.findIndex(user=>user.id == id);
        this.users.splice(index, 1);
      });
    }
  }

  onAddUser() {
    let user = new User(-1, "New User", "new.user@gmail.com", false);

    this.userService.addUser(user)
      .subscribe((addedUser)=> {

        this.users.push(addedUser as User);
      });
  }

  onUpdateUser(userToUpdate:User) {

    userToUpdate.active = !userToUpdate.active;

    this.userService.updateUser(userToUpdate)
      .subscribe((updatedUser:any)=> {

        //alert(JSON.stringify(updatedUser));

        let index = this.users.findIndex((user)=>user.id == userToUpdate.id);
        this.users.splice(index, 1, updatedUser);

      })
  }

}
