import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../interfaces/product';
import { Subscription, debounceTime } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { LayoutService } from '../../services/layout.services';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  items!: MenuItem[];

  products!: Product[];

  constructor(private productService: ProductService, public layoutService: LayoutService) {}

  ngOnInit() {
      this.productService.getProducts().subscribe(data => this.products = data);

      this.items = [
          { label: 'Add New', icon: 'pi pi-fw pi-plus' },
          { label: 'Remove', icon: 'pi pi-fw pi-minus' }
      ];
  }
}
