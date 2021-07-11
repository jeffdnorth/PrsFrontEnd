import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

product: Product = new Product();
products: Product[] = [];
vendors: Vendor[] = [];

  constructor(
    private syssvc: SystemService,
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
    

  ) { }

  save(): void {
    console.debug("B4", this.product);
    this.product.vendorId = +this.product.vendorId;
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("Product created successfully!");
        this.router.navigateByUrl('/product/list')
      },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void
   {
    this.vendorsvc.list().subscribe
    (
      res => { console.log(res); this.vendors = res; },
      err => {console.error(err); 
   }
    )
  }
}
