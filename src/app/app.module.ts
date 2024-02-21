import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.services';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AddTokenInterceptor } from './utils/interceptor/add-token.interceptor';
import { AdminComponent } from './pages/admin-page/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleTableComponent } from './components/table/role-table/role-table.component';
import { TableRoleComponent } from './components/table/table-role/table-role.component';
import { TablePermissionsComponent } from './components/table/table-permissions/table-permissions.component';
import { PermissionsTableComponent } from './components/table/permissions-table/permissions-table.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersTableComponent } from './components/table/users-table/users-table.component';
import { EditRoleFormComponent } from './components/table/role-table/edit-role-form/edit-role-form.component';

// Components Prime
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog'
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CardModule } from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    AdminComponent,
    DashboardComponent,
    RoleTableComponent,
    TableRoleComponent,
    TablePermissionsComponent,
    EditRoleFormComponent,
    PermissionsTableComponent,
    TopbarComponent,
    HomePageComponent,
    UsersTableComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule,
    ConfirmDialogModule,
    TabMenuModule,
    InputTextModule,
    CardModule,
    PanelModule,
    StyleClassModule,
    PasswordModule,
    BreadcrumbModule,
    CheckboxModule,
    MenuModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
    AuthenticationService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
