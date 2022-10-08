import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnDestroy {

  api_link = "https://localhost:7008/api/products"

  subs: Subscription[] = []

  products: Product[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  // public getProducts(next: (value: Product[]) => void) {
  //   return this.http_getProducts().subscribe(next);
  // }

  /* 
  *** HTTP Requests
  */
  public getProducts() {
    return this.http.get<Product[]>(this.api_link, { responseType: 'json' });
  }
}
