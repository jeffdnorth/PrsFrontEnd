import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router' ;
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  // ?? this variation works for edit
  user!: User;
  id: number = 0;
  
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.usersvc.get(this.id).subscribe(
      res => { console.log(res); this.user = res; },
      err => {console.error(err) } )  ;
    }
   
  save(): void {
    this.usersvc.change(this.user).subscribe
    (
      res => { console.log("This user edited successfully!"); 
      this.router.navigateByUrl('user/list');
},
err => { console.error(err) } 
);
    

    // console.debug("B4", this.user);
    // this.usersvc.change(this.user).subscribe (
    //   res => { console.log("This user edited successfully!"); 
    //           this.router.navigateByUrl('user/list');
    // },
    //   err => { console.error(err) } );

    
  }     
  
}
