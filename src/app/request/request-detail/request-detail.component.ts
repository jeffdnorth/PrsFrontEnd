import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  id: number = 0;

  constructor(
    private syssvc: SystemService,
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.requestsvc.get(this.id).subscribe(
      res => {
        console.log(res);
        this.request = res;
      },
      err => { console.error(err) }
    )
    }

}
