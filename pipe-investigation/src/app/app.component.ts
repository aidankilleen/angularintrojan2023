import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    {{ price | currency:'EUR' }} <br>

    {{ price | number:'4.1-5' }} <br>

    {{ date | date:'long' | uppercase }}<br>

    <input type="range" [(ngModel)]="n" [max]="text.length"><br>
    {{ text | slice: 0 : n | titlecase }}
    <hr>
    {{ text | summary:n }}
    <hr>
    {{ user | user }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = new User(1, "Alice", "alice@gmail.com", true);

  n = 50;
  title = 'pipe investigation';
  price = 22/7;
  date = new Date();

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquid cupiditate itaque architecto, mollitia repudiandae maxime dolorum assumenda quibusdam, eligendi aperiam ipsum dolor eum neque unde! Incidunt nostrum illum alias.";




}
