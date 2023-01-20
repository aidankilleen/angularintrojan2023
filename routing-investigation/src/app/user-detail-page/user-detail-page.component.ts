import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h2>User Detail</h2>

    <table *ngIf="user != null">
      <tr><td>Id</td><td>{{ user?.id }}</td></tr>
      <tr><td>Name</td><td>{{ user?.name }}</td></tr>
      <tr><td>Email</td><td>{{ user?.email }}</td></tr>
      <tr><td>Active</td><td>{{ user?.active ? "Active" : "Inactive" }}</td></tr>
    </table>

    <h3 *ngIf="user == null">User not found</h3>
  
  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent {

  id: number = -1;
  user?: User;

  constructor(public route:ActivatedRoute, 
              public userService: UserService) {

    route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.user = this.userService.getUser(this.id);

    })
  }

}
