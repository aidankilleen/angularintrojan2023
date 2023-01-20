import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  addUser(userToAdd: User): Observable<User> {

    let userWithoutId = {
      name: userToAdd.name, 
      email: userToAdd.email, 
      active: userToAdd.active
    }

    return this.httpClient.post<User>(this.url, userWithoutId);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  updateUser(user: User) {
    return this.httpClient.put(
        `${this.url}/${user.id}`, 
        user
    );
  }  
}
