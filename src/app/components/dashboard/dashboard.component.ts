import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { AuthenticationService } from '../../services/authentication.services';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  listProduct: Product[] = []
  user: any;
  admin: any;
  permissions: any;

  constructor(private _productService: ProductService, public _authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.getProducts();
    this.user = this._authenticationService.user;
    this.admin = this._authenticationService.isAdmin;
    this.permissions = this._authenticationService.permissions;
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProduct = data;
    })
  }

}