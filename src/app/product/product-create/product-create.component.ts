import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

product: Product = new Product();

  constructor(
    private syssvc: SystemService,
    private productsvc: ProductService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4", this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("Product created successfully!");
        this.router.navigateByUrl('/product/list')
      },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
  }
}
