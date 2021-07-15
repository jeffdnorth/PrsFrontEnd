import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if(users == null || searchCriteria.length === 0) {
      return users;
    }
    let search = searchCriteria.toLowerCase();
    let selectedUsers: User[] = [];
    for(let u of users) {
      if( u.id.toString().includes(search)
      || u.username.toLowerCase().includes(search)
      || u.password.toLowerCase().includes(search)
      || u.firstname.toString().includes(search)
      || u.lastname.toLocaleLowerCase().includes(search)
      || u.phone.toLocaleLowerCase().includes(search)
      || u.email.toLocaleLowerCase().includes(search)

      // || (c.sales !== null && c.sales.toString().toLowerCase().includes(search) )
      // || (c.created !== null && c.created.toString().toLowerCase().includes(search) )
      ) {
        selectedUsers.push(u);   
      }
    }
    return selectedUsers;
  }
}
