import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.css']
})
export class OnlineStoreComponent implements OnInit {


  minheight = window.innerHeight;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  /*********************
  *** CART
  *********************/
  itemsInCart = 0;

  addProductToCart(prod: Product) {
    // todo: collections in typescript. check if item is contained in collection
    this.itemsInCart += 1;
  }
}
