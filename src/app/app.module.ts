import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { CreateAccountComponent } from './components/organisms/create-account/create-account.component';
import { HomeTemplateComponent } from './components/templates/home-template/home-template.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { ListUsersComponent } from './components/organisms/list-users/list-users.component';
import { IlustrationComponent } from './components/molecules/ilustration/ilustration.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { RowTableComponent } from './components/organisms/row-table/row-table.component';
import { GraphComponent } from './components/molecules/graph/graph.component';
import { DeleteUserComponent } from './components/molecules/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/organisms/update-user/update-user.component';
import { SignOutComponent } from './components/atoms/sign-out/sign-out.component';
import { LoadingComponent } from './components/molecules/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent,
    LoginPageComponent,
    MainComponent,
    AuthenticationComponent,
    HomePageComponent,
    LoginFormComponent,
    CreateAccountComponent,
    HomeTemplateComponent,
    ListUsersComponent,
    IlustrationComponent,
    LogoComponent,
    NavbarComponent,
    RowTableComponent,
    GraphComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    SignOutComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    httpInterceptorProviders,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
