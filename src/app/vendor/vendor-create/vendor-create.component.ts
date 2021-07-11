import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  
  vendor: Vendor = new Vendor();
  vendors: Vendor[] = [];

  constructor(
   private syssvc: SystemService,
   private vendorsvc: VendorService,
   private router: Router
  ) { }

  save(): void {
    this.vendor.id = +this.vendor.id;
    console.debug("B4", this.vendor);
    this.vendorsvc.create(this.vendor).subscribe(
       res => { 
         console.log("Vendor created successfully!"); 
         this.router.navigateByUrl('vendor/list')
        },
       err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => { console.log(res); this.vendors = res; },
      err => { console.error(err); }
    )
  }


}
