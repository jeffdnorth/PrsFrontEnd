import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // ?? guessing on constr.
  user: User[] = [];
  searchCriteria: string = "";
  

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router

  ) { }
//Guessing
  save(): void {
    console.debug(this.user.id);
    this.usersvc.edit(this.user).subscribe(
       res => { 
         console.debug("User edited successfully!"); 
         this.router.navigateByUrl('/user/edit')
        },
       err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    
  }

}
