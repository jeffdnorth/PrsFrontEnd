import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor! : Vendor;
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
    private vendorsvc: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.vendorsvc.get(this.id).subscribe(
      res => {
        console.log(res);
        this.vendor = res;
      },
      err => { console.error(err) }
    )
  }

}
