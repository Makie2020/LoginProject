import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/register/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/interceptor/add-token.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { TableRoleComponent } from './components/table/table-role/table-role.component';
import { TablePermissionsComponent } from './components/table/table-permissions/table-permissions.component';

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
import {RadioButtonModule} from 'primeng/radiobutton';
import { EditUserFormComponent } from './components/table/edit-user-form/edit-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    NavbarComponent,
    SpinnerComponent,
    AdminComponent,
    DashboardComponent,
    TableComponent,
    TableRoleComponent,
    TablePermissionsComponent,
    EditUserFormComponent,
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
    RadioButtonModule,
    DialogModule,
    ConfirmDialogModule,
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
