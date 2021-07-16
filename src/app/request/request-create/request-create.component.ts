import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request.class';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  requests: Request[] = [];

  constructor(
    private syssvc: SystemService,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  save(): void {
    this.request.id = +this.request.id;
    console.debug("B4", this.request);
    this.requestsvc.create(this.request).subscribe(
       res => { 
         console.log("Request created successfully!"); 
         this.router.navigateByUrl('request/list')
        },
       err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => { console.log(res); this.requests = res; },
      err => { console.error(err); }
    )
  }
}


