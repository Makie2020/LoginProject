import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleTableComponent } from './components/table/role-table/role-table.component';
import { PermissionsTableComponent } from './components/table/permissions-table/permissions-table.component';

// Guards
import { AuthGuard } from './utils/guards/auth.guard';
import { AdminGuard } from './utils/guards/admin.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: RoleTableComponent },
      { path: 'permission', component: PermissionsTableComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }