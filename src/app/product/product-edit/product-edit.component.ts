import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    product!: Product;
    id: number = 0;

  constructor(
    private productsvc: ProductService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.productsvc.get(this.id).subscribe(
      res => { console.log(res); this.product = res; },
      err => {console.error(err) } ) ;
  }

  save(): void {
    this.product.id = +this.product.id;
     // console.debug("B4", this.product);
    console.debug(this.product.id);
    this.productsvc.change(this.product).subscribe(
      res => { console.log("Product edited successfully!");
        this.router.navigateByUrl("product/list"); },
        err => { console.error(err); }
    );
  }

}
