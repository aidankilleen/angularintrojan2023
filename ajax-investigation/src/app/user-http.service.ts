import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(public http: HttpClient) { }
  url = "http://localhost:3000/users";

  getUsers() {
    return this.http.get(this.url);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  addUser(user:User) {
    let userToAdd = {
      name: user.name, 
      email: user.email, 
      active: user.active
    };
    return this.http.post(this.url, userToAdd);
  }

  updateUser(user: User) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }
}
