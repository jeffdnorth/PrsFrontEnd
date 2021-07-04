import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  searchCriteria: string = '';

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
      private productsvc: ProductService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Products:", res);
        this.product = res;
      },
      err => {console.error(err); }
    );
  }
}
