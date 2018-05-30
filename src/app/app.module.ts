import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AppRoutingModule } from './app.routing';
import { AnalysisModule } from './analysis/analysis.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AnswersComponent } from './analysis/answers/answers.component';
import { AnalysisService } from './analysis/analysis.service';
import { AdminService } from './admin/admin.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    HomeComponent,
    AdminComponent,
    AnswersComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AnalysisModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AnalysisService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
