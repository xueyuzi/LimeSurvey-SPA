import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from '@angular/material';
import { FormsModule } from "@angular/forms";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { MenuComponent } from './admin/header/menu/menu.component';
import { WorkingTableModule } from './admin/working-table/working-table.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    WorkingTableModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
