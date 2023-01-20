import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'navigation',
  template: `
  <p-menubar [model]="items">
    <ng-template pTemplate="start">
      <div (click)="router.navigate(['home'])">
        <i class="pi pi-users"></i>
        <strong>User Manager App</strong>
      </div>
    </ng-template>
  </p-menubar>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  items: MenuItem[] = [];
  
  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.items = [
      {
        label: "Home", 
        command: () => this.router.navigate(["home"])
      }, 
      {
        label: "About", 
        command: () => this.router.navigate(["about"])
      },       
      {
        label: "Contact", 
        command: () => this.router.navigate(["contact"])
      },       
      {
        label: "User List", 
        command: () => this.router.navigate(["userlist"])
      },       
    ]
  }


}
