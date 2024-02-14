import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/register/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

// Guards
import { AuthGuard } from './utils/guards/auth.guard';
import { AdminGuard } from './utils/guards/admin.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'signIn', component: SignInComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard],    
    children: [
    {path: 'home', component: TableComponent},
    {path: 'users', component: TableComponent},
    {path: 'role', component: TableComponent},
    {path: 'permission', component: TableComponent},
] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }