import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  //  (changed from: users: User[] = [];  -which is used for a list as we are looking for single user)  
  user!: User;
  searchCriteria: string = "";
  // sort column for pipe 
  sortColumn: string = "id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
       return;
     }
       this.sortColumn = column;
       this.sortAsc = true;
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("Users:", res);
        this.user = res;
      },
      err => { console.error(err); }
    );
  }
}
