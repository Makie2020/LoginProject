import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/register/signin.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './components/table/rolePage/table/table.component';
import { PermissionsPageComponent } from './components/table/permissions-page/permissions-page.component';

// Guards
import { AuthGuard } from './utils/guards/auth.guard';
import { AdminGuard } from './utils/guards/admin.guard';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomePageComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signIn', component: SignInComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'home', component: TableComponent },
      { path: 'users', component: TableComponent },
      { path: 'role', component: TableComponent },
      { path: 'permission', component: PermissionsPageComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }