import { Component, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'ts-investigation',
  template: `
    ts-investigation
    <div *ngIf="user!=null">
    {{ user.name }}
    {{ user.email }}
    {{ user.active }}
    </div>
  `,
  styleUrls: ['./ts-investigation.component.css']
})
export class TsInvestigationComponent {

  @Input() public user!:User;

  private names: string[] = ["apple", "banana", "cherry", "date"];

  private numbers: number[] = [1, 2, 5, 4, 7, 9, 8, 3, 6, 10];
  
  constructor(public userService: UserService) {

    let users = this.userService.getUsers();

    console.log(users);

    users.forEach(user => console.log(user.name));


    let activeUsers = users.filter((user) => {
      if (user.active) {
        return true;
      } else {
        return false;
      }
    });

    console.log(activeUsers);

    activeUsers = users.filter(user => user.active);

    console.log(activeUsers);


    users.filter(user => user.active)
        .forEach(user => console.log(user.name));



    console.log(this.user?.name);

    this.names.forEach(function (name) {
      console.log(name);
    });

    // ES6
    this.names.forEach((name) => {
      console.log(name);
    });

    let result = this.numbers.filter((n) => {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    });
    console.log(this.numbers);
    console.log(result);

    result = this.numbers.filter(n => n % 2 == 0);
    console.log(result);
    let b:boolean = true;
    console.log(b);


    let id = 3;

    let index = users.findIndex(user => user.id == id);

    console.log(index);
    console.log(users[index]);

    users.splice(index, 1);

    console.log(users);

    console.log(this.numbers);

    let sorted = this.numbers.sort((a, b) => a - b);

    console.log(sorted);

    let sortedUsers = users.sort((u1, u2) => u2.id - u1.id);

    console.log(sortedUsers);


    users.sort((u1, u2) => u2.id-u1.id)
      .filter(u => u.active)
      .forEach(u => console.log(u.name));














    


  }


}
