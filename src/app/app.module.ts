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
import { SignInComponent } from './components/register/signin.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/interceptor/add-token.interceptor';
import { AdminComponent } from './pages/admin-page/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './components/table/rolePage/table/table.component';
import { TableRoleComponent } from './components/table/table-role/table-role.component';
import { TablePermissionsComponent } from './components/table/table-permissions/table-permissions.component';
import { PermissionsPageComponent } from './components/table/permissions-page/permissions-page.component';

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
import { EditUserFormComponent } from './components/table/rolePage/table/edit-user-form/edit-user-form.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    SpinnerComponent,
    TopbarComponent,
    AdminComponent,
    DashboardComponent,
    TableComponent,
    TableRoleComponent,
    TablePermissionsComponent,
    EditUserFormComponent,
    PermissionsPageComponent,
    TopbarComponent,
    WelcomePageComponent
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
    PanelModule,
    PasswordModule,
    CheckboxModule,
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
