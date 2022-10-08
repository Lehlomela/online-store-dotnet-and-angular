import { Component, OnInit } from '@angular/core';
import * as DarkReader from 'darkreader';
import { Product } from 'src/models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  darkmode = false;

  constructor(private prodService: ProductService) { }


  product_images: Array<string> = ["https://th.bing.com/th/id/R.0893f47e32c3b6bce3954315c59f6feb?rik=3RkpP46QTYV5ow&pid=ImgRaw&r=0",
    "https://i.pinimg.com/originals/6c/14/35/6c14354536b1e029657e77a6b384afe0.jpg",
    "https://i.pinimg.com/originals/6c/14/35/6c14354536b1e029657e77a6b384afe0.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/4ddfe2c4-54c3-402e-a4ae-24d387e03bff-georgia-green-tuck-pub.jpg",
    "https://torontolife.com/wp-content/uploads/2017/07/toronto-restaurants-bars-king-taps-beer-finanical-district-burger-1200x0-c-default.jpg"
  ]


  ngOnInit(): void {
    this.enableDarkReader();
    this.getProducts();
  }

  enableDarkReader() {
    /************************** 
    * Dark reader mode
    * https://github.com/darkreader/darkreader
    */
    if (this.darkmode)
      DarkReader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10
      });
  }

  toggleDarkMode() {

    this.darkmode = !this.darkmode;

    if (this.darkmode)
      this.enableDarkReader();
    else
      DarkReader.disable();
  }


  getProducts() {
    this.prodService.getProducts().subscribe(
      x => this.products = x
    )

    console.log(this.products);

  }

}
