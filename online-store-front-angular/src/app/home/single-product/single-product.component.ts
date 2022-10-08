import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor() { 
    this.product = new Product();
  }

  @Input("image") product_image = "";
  @Output() addProduct = new EventEmitter<Product>();

  product: Product;

  ngOnInit(): void {
    
  }

  addToCart() {
    this.addProduct.emit(this.product);
  }
}
