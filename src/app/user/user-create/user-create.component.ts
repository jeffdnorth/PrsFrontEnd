import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { User } from '../user.class' ;
import { UserService } from '../user.service' ;
import { SystemService } from 'src/app/core/system.service' ;


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']

})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4", this.user);
    this.usersvc.create(this.user).subscribe(
       res => { 
         console.debug("User created successfully!"); 
         this.router.navigateByUrl('/user/list')
        },
       err => { console.error(err); }
    );
  }

  ngOnInit(): void {
  }
}
