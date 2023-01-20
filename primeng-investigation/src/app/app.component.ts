import { Component } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <p-menubar [model]="items"></p-menubar>


    <hr>

    <i class="pi pi-spin pi-arrow-circle-down" style="font-size: 2rem"></i>
    <i class="pi pi-user-plus"></i>
    <i class="pi pi-users"></i>
    <i class="pi pi-user-minus"></i>
    <i class="pi pi-user-edit"></i>

    <hr>

    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>

    <hr>
    <p-button (click)="onClick()" label="Click" ></p-button>

    <hr>

    <h5>Default</h5>
    <p-accordion>
        <p-accordionTab header="Header I" [selected]="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </p-accordionTab>
    </p-accordion>

    <p-confirmDialog 
      [style]="{width: '50vw'}" key="positionDialog" 
      [baseZIndex]="10000" [position]="position">
    </p-confirmDialog>

     <hr><br><br>
    
    <span class="p-float-label">
        <input name="position" id="position" type="text" 
          pInputText 
          [(ngModel)]="position"
          required
          minlength="5"
          maxlength="20"
          #txtPosition="ngModel"
          > 
        <label for="position">Position</label>
    </span>

    <div *ngIf="txtPosition.invalid && (txtPosition.touched || txtPosition.dirty)">
        <div *ngIf="txtPosition.errors?.['required']">This is required</div>
        <div *ngIf="txtPosition.errors?.['minlength']">Minimum length is 5</div>
    </div>


  `,
  styleUrls: ['./app.component.css'],
  providers: [ ConfirmationService ]
})
export class AppComponent {
  title = 'primeng investigation';
  position = 'top';

  items: MenuItem[];

  constructor(public confirmationService: ConfirmationService) {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
}
  

  onClick() {
    //alert("Clicked");

    this.confirmationService.confirm({
      message: "Are you sure?", 
      header: "Confirm", 
      icon: "pi pi-exclamation-triangle", 

      accept: () => {
        alert("ok");
      }, 
      reject: () => {
        alert("cancel");
      }, 
      key:"positionDialog" 

    })
  }
}
