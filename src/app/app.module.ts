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

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    HomeComponent,
    AdminComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    AnalysisModule,
    AppRoutingModule,
  ],
  providers: [
    AnalysisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
