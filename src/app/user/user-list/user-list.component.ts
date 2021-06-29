import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {  

  users: User[] = [];
  searchCriteria: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
