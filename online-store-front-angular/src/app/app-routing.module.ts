import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OnlineStoreComponent } from './online-store.component';

const routes: Routes = [
  // wildcart route
  
  { path: 'admin/add-product', title: "Add Product", component: AddProductComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
