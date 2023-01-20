import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  template: `
    <button 
      pButton pRipple type="button" 
      icon="pi pi-user-plus" 
      class="p-button-rounded p-button-success"
      (click)="onAddUserClick()"
      >
    </button>


    <p-table [value]="userService.getUsers()"
      editMode="row" dataKey="id">
      <ng-template pTemplate="header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" 
                  let-user 
                  let-editing="editing"
                  let-ri="rowIndex">
        <tr [pEditableRow]="user">

          <td>{{ user.id }}</td>

          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                  <input pInputText type="text" 
                  [(ngModel)]="user.name">
              </ng-template>
              <ng-template pTemplate="output">
                  {{user.name}}
              </ng-template>
            </p-cellEditor>            
          </td>
        
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td>
            <button pButton pRipple type="button" 
              icon="pi pi-trash" 
              class="p-button-rounded p-button-danger"
              (click)="onDeleteClick(user.id)">
            </button>

            <button *ngIf="!editing" 
              pButton pRipple type="button" 
              pInitEditableRow 
              icon="pi pi-pencil" 
              (click)="onRowEditInit(user)" 
              class="p-button-rounded p-button-text">
            </button>
            
            <button *ngIf="editing" 
              pButton pRipple type="button" 
              pSaveEditableRow 
              icon="pi pi-check" 
              (click)="onRowEditSave(user)" 
              class="p-button-rounded p-button-text p-button-success mr-2">
            </button>

            <button *ngIf="editing" 
                pButton pRipple type="button" 
                pCancelEditableRow 
                icon="pi pi-times" 
                (click)="onRowEditCancel(user, ri)" 
                class="p-button-rounded p-button-text p-button-danger">
            </button>

          </td>
        </tr>
      </ng-template>
    </p-table>

    <p-dialog [(visible)]="showDialog" position="top">
      <ng-template pTemplate="header">
        <h3>Add User</h3>
      </ng-template>

      <br>

      <span class="p-float-label">
          <input 
            id="txt-name" 
            type="text" 
            pInputText
            [(ngModel)]="editingUser.name"
          > 
          <label for="txt-name">Name</label>
      </span><br>

      <span class="p-float-label">
          <input 
            id="txt-email" 
            type="text" 
            pInputText
            [(ngModel)]="editingUser.email"
          > 
          <label for="txt-email">Email</label>
      </span>

      <p-checkbox label="Active" 
        [(ngModel)]="editingUser.active" [binary]="true">
      </p-checkbox>
      

      <ng-template pTemplate="footer">
        <p-button (click)="onSaveClick()" label="Save" 
          styleClass="p-button-text"></p-button>
        <p-button (click)="showDialog=false" label="Cancel" 
          styleClass="p-button-text"></p-button>

          <hr>
          {{ editingUser | json }}

      </ng-template>


    </p-dialog>
  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {

  showDialog = false;

  editingUser: User = new User();

  clonedUsers: { [s: string]: User; } = {};

  constructor(public userService: UserService) {
  }

  onAddUserClick() {
    this.editingUser = new User();
    this.showDialog = true;
  }

  onSaveClick() {
    // save the editing user
    this.userService.addUser(this.editingUser)

    this.showDialog = false;
  }

  onDeleteClick(id: number) {
    if (confirm("Are you sure")) {
      this.userService.deleteUser(id);
    }
  }

  onRowEditInit(user: User) {
    //alert("onRowEdit")
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditCancel(user: User, index: number) {
    this.userService.users[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
}
  onRowEditSave(user: User) {
    //alert(JSON.stringify(user));
    this.userService.updateUser(user);
  }
}
