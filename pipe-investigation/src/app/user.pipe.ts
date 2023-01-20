import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';


function txUser(user: User) {
  return `${user.active ? "ACTIVE:" : "INACTIVE:"}${ user.name } ${ user.email }`;
}
@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(user: User, ...args: unknown[]): unknown {
    return txUser(user);
  }

}
