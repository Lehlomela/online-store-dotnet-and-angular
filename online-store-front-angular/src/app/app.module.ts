import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleProductComponent } from './home/single-product/single-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { OnlineStoreComponent } from './online-store.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    HomeComponent,
    NavbarComponent,
    SingleProductComponent,
    FooterComponent,
    AddProductComponent,
    LoginComponent,
    OnlineStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [OnlineStoreComponent]
})
export class AppModule { }
