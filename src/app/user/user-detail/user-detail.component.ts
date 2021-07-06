import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

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
    private syssvc: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute
  ) { }
  //the below is incorrect -not needed for capstone
  // EXTRA CLSING PARENS AFTER SUBSCRIBE?
  //delete(): void {
    //this.user.id = -this.user.id; 
    //console.debug(this.user);
    //this.usersvc.delete(this.user).subscribe(
     //  res => { console.debug("User deleted successfully!"); },
      // err => { console.error(err); }     
  //  );
  //}

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
