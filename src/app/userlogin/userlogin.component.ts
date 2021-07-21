import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { SystemService } from '../core/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
  private usersvc: UserService,
  private router: Router,
  private syssvc: SystemService
  ) { }

  login(): void {
    this.syssvc.loggedInUser = null;
    this.usersvc.login(this.username, this.password).subscribe
    (
      res=> {this.syssvc.loggedInUser = res;
      if(this.syssvc.loggedInUser != null)  {
        this.router.navigateByUrl('/request/list')
      }
    },
    )

    this.message = "User login failed!";
  }

  ngOnInit(): void {
    this.syssvc.loggedInUser = null;
  }

}

    
  //  ? if(this.password === "password") {
      // let sper = new Salesperson();
      // this.syssvc.loggedInUser = sper;
      // console.debug(this.syssvc.loggedInUser);
      // this.router.navigateByUrl("/cust/list");
    // }
