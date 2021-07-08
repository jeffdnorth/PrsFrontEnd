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
  id: number = 0;

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

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.usersvc.get(this.id).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => { console.error(err) }
    )
  }
    //the below not needed for capstone per Greg
  //deleteUser(): {
    //this.id = -this.route.snapshot.params.id
    //this.usersvc.remove(this.id).subscribe(
     //  res => { console.log("User deleted successfully!", res);
      // this.user = res; this.router.navigateByUrl("user/list") },
      // err => { console.error(err); }     
  //    );
  //  }

}
