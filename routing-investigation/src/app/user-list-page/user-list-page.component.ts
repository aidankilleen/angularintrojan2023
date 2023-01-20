import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  template: `
    <h2>User Liser</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userService.users">
          <td><a [routerLink]="'' + user.id">{{ user.id }}</a></td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>

  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {

  constructor(public userService: UserService) {

  }
}
